let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  let h3 = document.querySelector("h3");
  let getColor = getRandomColor();
  h3.innerText = getColor;
  h3.classList.add("style");
  h3.style.color = getColor;

  let div = document.querySelector("div");
  div.style.backgroundColor = getColor;
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let color = `rgb(${red},${green},${blue})`;
  return color;
}

let para = document.querySelector("p");
para.addEventListener("click", function () {
  console.log("para is clicked");
});

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function () {
  console.log("mouse is entered");
});


