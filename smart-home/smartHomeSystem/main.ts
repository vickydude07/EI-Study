import { SmartHomeHub } from "./SmartHomeHub";
import readline from "readline";

// Initialize readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const hub = new SmartHomeHub();

function initializeDevices() {
    rl.question('Enter device details as JSON (e.g., [{"id":1,"type":"light"},{"id":2,"type":"thermostat","temp":70},{"id":3,"type":"door lock"}]): ', (devices) => {
        try {
            const devicesArray = JSON.parse(devices);
            hub.initializeDevices(devicesArray);
            console.log('Devices initialized successfully.');
            addObserver();
        } catch (err) {
            console.error('Invalid JSON. Please try again.');
            initializeDevices();
        }
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

initializeDevices();
