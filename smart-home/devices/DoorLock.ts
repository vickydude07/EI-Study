import { Device } from "./Device";

export class DoorLock extends Device {
    private status: string = 'locked';

    constructor(id: number) {
        super(id, 'door lock');
    }

    lock(): void {
        this.status = 'locked';
    }

    unlock(): void {
        this.status = 'unlocked';
    }

    turnOn(): void {}
    turnOff(): void {}

    getStatus(): string {
        return `Door ${this.id} is ${this.status}.`;
    }
}