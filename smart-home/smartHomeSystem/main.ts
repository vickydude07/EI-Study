import { SmartHomeHub } from "./SmartHomeHub";
import readline from "readline";

// Define device types
interface Device {
    id: number;
    type: string;
}

interface Thermostat extends Device {
    type: 'thermostat';
    temp: number;
}

// Union type for devices
type DeviceType = Device | Thermostat;

// Initialize readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const hub = new SmartHomeHub();

function promptDeviceDetails(devices: DeviceType[] = []) {
    rl.question('Enter device ID (or type "done" to finish): ', (id) => {
        if (id.toLowerCase() === 'done') {
            // All devices have been entered
            hub.initializeDevices(devices);
            console.log('Devices initialized successfully.');
            addObserver();
            return;
        }

        rl.question('Enter device type (e.g., "light", "thermostat", "door lock"): ', (type) => {
            const device: DeviceType = { id: parseInt(id), type };

            if (type === 'thermostat') {
                rl.question('Enter thermostat temperature: ', (temp) => {
                    (device as Thermostat).temp = parseInt(temp);
                    devices.push(device);
                    promptDeviceDetails(devices);
                });
            } else {
                devices.push(device);
                promptDeviceDetails(devices);
            }
        });
    });
}

function addObserver() {
    rl.question('Do you want to add an observer? (yes/no): ', (answer) => {
        if (answer.toLowerCase() === 'yes') {
            hub.addObserver({
                update: (message) => console.log(`Observer notified: ${message}`)
            });
            console.log('Observer added.');
        }
        showMenu();
    });
}

function showMenu() {
    console.log('\nChoose an option:');
    console.log('1. View Status');
    console.log('2. Turn On Device');
    console.log('3. Add Schedule');
    console.log('4. Exit');

    rl.question('Enter your choice: ', (choice) => {
        switch (choice) {
            case '1':
                console.log(hub.viewStatus());
                showMenu();
                break;
            case '2':
                rl.question('Enter device ID to turn on: ', (id) => {
                    hub.turnOn(parseInt(id));
                    console.log(`Device ${id} turned on.`);
                    showMenu();
                });
                break;
            case '3':
                rl.question('Enter schedule as JSON (e.g., {"deviceId":2,"time":"06:00","action":"Turn On"}): ', (schedule) => {
                    try {
                        const scheduleObj = JSON.parse(schedule);
                        hub.addSchedule(scheduleObj);
                        console.log('Schedule added.');
                    } catch (err) {
                        console.error('Invalid JSON. Please try again.');
                    }
                    showMenu();
                });
                break;
            case '4':
                console.log('Exiting...');
                rl.close();
                break;
            default:
                console.log('Invalid choice. Please try again.');
                showMenu();
        }
    });
}

promptDeviceDetails();
