import { Device } from "./Device";

export class Light extends Device {
    private status: string = 'off';

    constructor(id: number) {
        super(id, 'light');
    }

    turnOn(): void {
        this.status = 'on';
    }

    turnOff(): void {
        this.status = 'off';
    }

    getStatus(): string {
        return `Light ${this.id} is ${this.status}.`;
    }
}