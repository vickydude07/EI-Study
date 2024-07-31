import { Device } from "../devices/Device";
import { DeviceFactory } from "../factory/DeviceFactory";
import { DeviceProxy } from "../proxy/DeviceProxy";
import { Scheduler } from "../scheduler/Scheduler";
import { Subject } from "../observer/Subject";

export class SmartHomeHub extends Subject {
    private devices: Map<number, Device> = new Map();
    private scheduler: Scheduler = new Scheduler();

    constructor() {
        super();
    }

    initializeDevices(deviceConfigs: {id: number, type: string, temp?: number}[]): void {
        deviceConfigs.forEach(config => {
            const device = DeviceFactory.createDevice(config.type, config.id, config.temp);
            const proxy = new DeviceProxy(device);
            this.devices.set(config.id, proxy);
        });
        this.notifyObservers("Devices initialized");
    }

    turnOn(id: number): void {
        const device = this.devices.get(id);
        if (device) {
            device.turnOn();
            this.notifyObservers(`Device ${id} turned on`);
        }
    }

    turnOff(id: number): void {
        const device = this.devices.get(id);
        if (device) {
            device.turnOff();
            this.notifyObservers(`Device ${id} turned off`);
        }
    }

    addSchedule(schedule: {deviceId: number, time: string, action: 'Turn On' | 'Turn Off'}): void {
        this.scheduler.addSchedule(schedule);
    }

    viewStatus(): string {
        return Array.from(this.devices.values()).map(device => device.getStatus()).join(' ');
    }
}