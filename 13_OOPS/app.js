let arr = [1, 2, 3];
let arr2 = [1, 2, 3];

arr.sayHello = () => {
  console.log("Hello, I am Arr");
};
arr2.sayHello = () => {
  console.log("Hello, I am Arr");
};
//insuffiecient way

//////////////////////////////////////////////////////

//factory function
function personMaker(name, age) {
  const person = {
    name: name,
    age: age,
    talk() {
      console.log(`Hi my name is ${this.name}`);
    },
  };
  return person;
}

let p1 = personMaker("siddhant", 21); //copy
let p2 = personMaker("rahul", 17); // copy
p1.talk();
p2.talk();

console.log(p1.talk() == p2.talk()); //returns false

//insuffiecient way

//////////////////////////////////////////////////////

//constructors - doesn't return anything

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.talk = function () {
  console.log(`Hi my name is ${this.name}`);
};

let person1 = new Person("siddhant", 21);
let person2 = new Person("rahul", 17);

person1.talk() == person2.talk(); //returns true because both are properties of prototype

/// this is better way of doing it

//////////////////////////////////////////////////////

//classes

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  talk() {
    console.log(`Hi my name is ${this.name}`);
  }
}

let person11 = new Person("siddhant", 21);
let person22 = new Person("rahul", 17);

person11.talk() == person22.talk(); //returns true

////////////////////////////////////////////////////
