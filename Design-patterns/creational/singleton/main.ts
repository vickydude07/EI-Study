import { Singleton } from "./singleton";

const singleton1 = Singleton.getInstance();
singleton1.doSomething(); // Doing something

const singleton2 = Singleton.getInstance();
console.log(singleton1 === singleton2); // true