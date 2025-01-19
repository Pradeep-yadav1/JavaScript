//control event-->occur when value of element has changed only works on input,textarea,select

//input event-->fires when value of input,select,textarea has changed ie each single letter

let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
});

let user = document.querySelector("#user");
user.addEventListener("change", function () {
  console.log("change event");
  console.log("final value = ", this.value);
});

user.addEventListener("input", function () {
  console.log("input event");
  console.log("final value = ", this.value);
});

let p = document.querySelector("p");
let editor = document.querySelector("#text");
editor.addEventListener("input", function () {
  p.innerText = this.value;
  console.log(editor.value);
});
