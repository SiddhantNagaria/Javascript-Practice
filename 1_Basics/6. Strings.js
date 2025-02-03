const name = "siddhant"
const repoCount = 10;

// console.log(name + repoCount + "value");

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('Siddhant Nagaria');
//String is object , not array

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('d'));

console.log(gameName.substring(0,4));
// 4th index is not included

const anotherString = gameName.slice(-8,4);
console.log(anotherString);


const newString = "       siddhant         ";
console.log(newString);
console.log(newString.trim());

const url = "https://siddhant.com/piano%20siddhant"
console.log( url.replace('%20', '-'));
console.log(url.includes('with'));

console.log(gameName.split('-'));
