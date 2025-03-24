let btns = document.querySelectorAll("button");

for (btn of btns) {
  //   btn.onclick = sayhello;
  //   btn.onclick = sayName;

  btn.addEventListener("click", sayhello);
  btn.addEventListener("click", sayName);

  btn.addEventListener("dblclick", function () {
    alert("Double clicked");
  });
}

function sayhello() {
  alert("button clicked");
}

function sayName() {
  alert("i clicked");
}

let p = document.querySelector("p");
p.addEventListener("click", function () {
  alert("paragraph clicked");
});
