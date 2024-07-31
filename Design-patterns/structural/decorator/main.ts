import { ConcreteComponent } from "./ConcreteComponent";
import { Decorator } from "./Decorator";

class ConcreteDecorator extends Decorator {
    operation(): string {
        return `Decorator(${super.operation()})`;
    }
}

const component = new ConcreteComponent();
const decoratedComponent = new ConcreteDecorator(component);

console.log(component.operation()); // ConcreteComponent
console.log(decoratedComponent.operation()); // Decorator(ConcreteComponent)