let h1 = document.querySelector("h1");

function changecolor(color, delay, nextColor) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextColor) {
        changecolor();
    }
  }, delay);
}

changecolor("red", 1000, () => {
  changecolor("blue", 1000, () => {
    changecolor("green", 1000);
  });
});

// callback hell -> callback nesting