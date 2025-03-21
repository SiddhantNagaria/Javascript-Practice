document.getElementById("id").style.color = "red";
document.getElementById("id").style.backgroundColor = "yellow";
document.getElementById("id").style.fontSize = "24px";

document.getElementById("id").style.display = "none";
document.getElementById("id").style.display = "block";

let links = document.querySelectorAll("a");
links.forEach((link) => {
  link.style.color = "red";
});

for (link of links) {
  link.style.color = "red";
};

for (let i = 0; i < links.length; i++) {
  links[i].style.color = "red";
};