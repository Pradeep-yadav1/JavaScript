//Question--1
let body = document.querySelector("body");
let button = document.createElement("button");
let input = document.createElement("input");
button.innerText ="Click me";

body.append(input);
body.append(button);

input.setAttribute("placeholder","username");
button.setAttribute("id","btn");

let btn = document.querySelector("#btn");
btn.classList.add("btnstyle");

button.style.backgroundColor = "blue";
button.style.color = "white";

let h1 = document.createElement("h1");
body.prepend(h1);
h1.innerHTML = "<u>DOM Practice</u>";
h1.style.color = "purple";

let p = document.createElement("p");
p.innerHTML = "Hello <b>Everybody</b>";
body.append(p);
