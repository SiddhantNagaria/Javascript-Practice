let jsonRes = '{"fact":"siddhant nagaria is coder","length":21}';

let validRes = JSON.parse(jsonRes);//JSON string to JS object
console.log(validRes);
console.log(validRes.fact);
console.log(validRes.length);

let student = {
  name: "siddhant",
  age: 21,
};

let studentJson = JSON.stringify(student); //JS object to JSON string

console.log(studentJson);
