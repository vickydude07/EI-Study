export abstract class Device {
    constructor(public id: number, public type: string) {}

    abstract turnOn(): void;
    abstract turnOff(): void;
    abstract getStatus(): string;
}