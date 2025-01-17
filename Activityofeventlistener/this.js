//this --> it callback to the obj that call it
//imp when same element are used many times so call by "this"
//when to use single eventlistener over multiple obj

let btn2 = document.querySelector("#btn2");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let para = document.querySelector("p");

function setColor() {
  console.dir(this.innerText);
  this.style.backgroundColor = "green";
  }
  
btn2.addEventListener("click",setColor);
h1.addEventListener("click",setColor);
h3.addEventListener("click",setColor);
para.addEventListener("click",setColor);