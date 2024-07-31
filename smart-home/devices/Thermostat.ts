import { Device } from "./Device";

export class Thermostat extends Device {
    private temperature: number;

    constructor(id: number, temperature: number) {
        super(id, 'thermostat');
        this.temperature = temperature;
    }

    setTemperature(temp: number): void {
        this.temperature = temp;
    }

    turnOn(): void {}
    turnOff(): void {}

    getStatus(): string {
        return `Thermostat ${this.id} is set to ${this.temperature} degrees.`;
    }
}