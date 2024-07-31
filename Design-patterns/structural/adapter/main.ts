import { Adapter } from "./Adapter";
import { Adaptee } from "./Adaptee";

const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);

console.log(adapter.request()); // Adapted: Specific request