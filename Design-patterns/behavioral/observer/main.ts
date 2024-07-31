import { Subject } from "./subject";
import { Observer } from "./observer";

class ConcreteObserver implements Observer {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(message: string): void {
        console.log(`${this.name} received message: ${message}`);
    }
}

const subject = new Subject();
const observer1 = new ConcreteObserver("Observer 1");
const observer2 = new ConcreteObserver("Observer 2");

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers("Hello Observers!");