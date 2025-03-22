let newP = document.createElement("p");
newP.innerText = "This is a new paragraph";
let body = document.querySelector("body");
body.appendChild(newP); //parent - body , child - newP
//can be inserted only one time at one place, no copies can be created

newP.append("additional text added to last ofelement");
newP.prepend("additional text added to starting of element");

let btn = document.createElement("button");
btn.innerText = "Click me";

newP.insertAdjacentElement("beforebegin", btn); // before the target element itself
newP.insertAdjacentElement("afterbegin", btn); // just inside target element, before its first child
newP.insertAdjacentElement("afterend", btn); //just inside target element after its last child
newP.insertAdjacentElement("beforeend", btn); //after the target element itself