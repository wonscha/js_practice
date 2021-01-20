import { halfOf, multiply } from './lib.js';
console.log(halfOf(84));
console.log(multiply(21, 2));

import doSomething from './doSomething.js';
doSomething();

import { flag, touch } from './validator.js';
console.log(flag);
touch();
console.log(flag);


class Vehicle {
    constructor(wheels) {
        this.wheels = wheels;
    }
    toString() {
        return `(${this.wheels})`
    }
}

class Car extends Vehicle {
    constructor(color) {
        super(4);
        this.color = color;
    }
    toString() {
        return `${super.toString()} colored : ${this.color}`
    }
}

const toyota = new Car('blue');
console.log(toyota.toString());

const author = {
    fullName: 'Bob Alice',
    books: ['Alice', 'Bob'],
    printBooks() {
        this.books.forEach(book => console.log(`${book} by ${this.fullName}`));
    }
};

author.printBooks()