import { Observer } from "./Observer";

export class Subject {
    private observers: Observer[] = [];

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(message: string): void {
        this.observers.forEach(observer => observer.update(message));
    }
}