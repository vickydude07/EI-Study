import { ProductFactory } from "./ProductFactory";

const productA = ProductFactory.createProduct("A");
productA.use(); // Using Product A

const productB = ProductFactory.createProduct("B");
productB.use(); // Using Product B