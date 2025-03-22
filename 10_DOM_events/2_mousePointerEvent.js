let btns = document.querySelectorAll("button");

// btn.onclick= ()=>{
//     alert(" button clicked");
//     console.log("button clicked");
// }

// function sayhello(){
//     alert("button clicked");
// }

for (btn of btns) {
  btn.onclick = sayhello;
  btn.onmouseenter = function () {
    console.log("mouse entered");
  };
}

function sayhello() {
  alert("button clicked");
}
