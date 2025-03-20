function sum(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log("you gave us", args[i]);
  }
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


function min(){
  console.log(arguments);
}
console.log(min(1,2,3,4,5,6,7,8,9,10));