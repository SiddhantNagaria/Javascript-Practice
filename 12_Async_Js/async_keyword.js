async function greet() {
  return "hello world"; //returns a promise
}
console.log(greet());

greet()
  .then((result) => {
    console.log("promise was resolved");
    console.log(result);
  })
  .catch((err) => {
    console.log("promise was rejected");
  });
