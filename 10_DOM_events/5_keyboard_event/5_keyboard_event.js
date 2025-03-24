let inp = document.querySelector("input");

inp.addEventListener("keydown", function () {
  console.log("key pressed");
});

inp.addEventListener("keyup", function () {
  console.log("key released");
});

inp.addEventListener("keydown", function (event) {
  console.log("key =", event.key);
  console.log("code =", event.code);
  console.log("key pressed");
});
