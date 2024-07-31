import { Context } from "./Context";
import { Strategy } from "./Strategy";

class AddStrategy implements Strategy {
    execute(a: number, b: number): number {
        return a + b;
    }
}

class MultiplyStrategy implements Strategy {
    execute(a: number, b: number): number {
        return a * b;
    }
}

const context = new Context(new AddStrategy());
console.log("Addition: ", context.executeStrategy(3, 4)); // Addition: 7

context.setStrategy(new MultiplyStrategy());
console.log("Multiplication: ", context.executeStrategy(3, 4)); // Multiplication: 12