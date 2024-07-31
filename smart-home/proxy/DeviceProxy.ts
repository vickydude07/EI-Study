import { Device } from "../devices/Device";

export class DeviceProxy extends Device {
    private realDevice: Device;

    constructor(realDevice: Device) {
        super(realDevice.id, realDevice.type);
        this.realDevice = realDevice;
    }

    turnOn(): void {
        this.realDevice.turnOn();
    }

    turnOff(): void {
        this.realDevice.turnOff();
    }

    getStatus(): string {
        return this.realDevice.getStatus();
    }
}