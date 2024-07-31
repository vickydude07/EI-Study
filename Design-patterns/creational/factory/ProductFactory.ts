import { Product } from "./Product";

export class ProductA implements Product {
    use(): void {
        console.log("Using Product A");
    }
}

export class ProductB implements Product {
    use(): void {
        console.log("Using Product B");
    }
}

export class ProductFactory {
    static createProduct(type: string): Product {
        switch (type) {
            case "A":
                return new ProductA();
            case "B":
                return new ProductB();
            default:
                throw new Error("Unknown product type");
        }
    }
}