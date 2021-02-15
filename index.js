// const spot = {
//     tail: true,
//     name: 'spot',
//     color: 'yellow',
//     age: 3
// };

// const jeep = {
//     tail: true,
//     name: 'jeep',
//     color: 'red',
//     age: 1
// };

// classes are blueprints for objects
class Dog {
    constructor(tail, name, color, age) {
        this.tail = tail;
        this.name = name;
        this.color = color;
        this.age = age;
    }
}

// intantiate a class
const spot = new Dog(true, 'spot', 'yellow', 3);
const jeep = new Dog(true, 'jeep', 'red', 1);

console.log(spot);
console.log(jeep);