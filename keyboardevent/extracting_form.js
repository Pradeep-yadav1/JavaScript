let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.dir(form);
  let user = this.elements[0]; //form.elements[0]
  let pass = this.elements[1];

//   let inp = document.querySelector("input");
//   console.dir(inp);
//   console.log(inp.value);

//   let user = document.querySelector("#user");
//   let pass = document.querySelector("#pass");
  console.log(user.value);
  console.log(pass.value);

//   alert(`Hi ${user.value},your password is set to ${pass.value}`);
});
