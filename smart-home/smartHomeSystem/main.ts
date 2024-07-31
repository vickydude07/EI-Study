import { SmartHomeHub } from "./SmartHomeHub";

const hub = new SmartHomeHub();
hub.initializeDevices([
    { id: 1, type: 'light' },
    { id: 2, type: 'thermostat', temp: 70 },
    { id: 3, type: 'door lock' }
]);

hub.addObserver({
    update: (message: string) => console.log(`Observer notified: ${message}`)
});

console.log(hub.viewStatus());

hub.turnOn(1);
hub.addSchedule({ deviceId: 2, time: "06:00", action: 'Turn On' });

console.log(hub.viewStatus());