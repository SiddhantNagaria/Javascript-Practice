function outerFunc() {
  let x = 5;
  function innerFunc() {
    console.log(x);
  }
  innerFunc();
}
outerFunc(); // Output: 5
