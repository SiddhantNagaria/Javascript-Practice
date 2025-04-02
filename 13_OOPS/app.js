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
