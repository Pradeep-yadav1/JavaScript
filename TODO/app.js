let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");
console.dir(ul);

btn.addEventListener("click", function () {
  if (input.value != "") {
    let item = document.createElement("li");
    item.innerText = input.value;
  
  let delbtn = document.createElement("button");
  delbtn.innerText = "delete";
  delbtn.classList.add("delete");

  item.appendChild(delbtn);
  ul.appendChild(item);
  input.value = "";
  }
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("delete");
  }
});

// let delbtns = document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         let parent = this.parentElement;
//         console.log(parent);
//         parent.remove();
//     });
// }
