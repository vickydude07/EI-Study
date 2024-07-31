import { Device } from "../devices/Device";
import { Light } from "../devices/Light";
import { Thermostat } from "../devices/Thermostat";
import { DoorLock } from "../devices/DoorLock";

export class DeviceFactory {
    static createDevice(type: string, id: number, temp?: number): Device {
        switch (type) {
            case 'light':
                return new Light(id);
            case 'thermostat':
                return new Thermostat(id, temp || 70);
            case 'door lock':
                return new DoorLock(id);
            default:
                throw new Error("Unknown device type");
        }
    }
}