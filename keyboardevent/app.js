// let btn = document.querySelector("button");
// btn.addEventListener("click",function(event){
//     console.log("button clicked");
//     console.log(event);      // pointer event
// })

//keyboard events
let inp = document.querySelector("input");
inp.addEventListener("keydown", function (event) {
  console.log(event);
  console.log("key was presses");
  console.log("key = ", event.key);
  console.log("code = ", event.code);
});

// inp.addEventListener("keyup",function(){
//     console.log("key was release")
// })

inp.addEventListener("keydown", function (event) {
  if (event.code == "ArrowUp") {
    console.log("character moves up");
  } else if (event.code == "ArrowDown") {
    console.log("character moves down");
  } else if (event.code == "ArrowLeft") {
    console.log("character moves left");
  } else if (event.code == "ArrowRight") {
    console.log("character moves right");
  }
});



//form events
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); //its a method to stop to redirecting a new url
  alert("form submitted");
});
