// let btn= document.querySelector("button");
// console.dir(btn);

// btn.onclick = function(){
//     alert("button was clicked");
// };

let btns = document.querySelectorAll("button");
// for (btn of btns){
//     btn.onclick = sayHello;//no () only name of func
//     btn.onmouseenter = function (){
//         console.log("you enter a button");
//         }
//     console.dir(btn);
// }
function sayHello(){
    alert("hello");
}
// btn.onclick = sayHello;


//element.addEventListener(event,callback);
for(btn of btns){
    // btn.addEventListener("click",sayHello);
    // btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",function(){
        console.log("you double click me ");
    });

}
function sayName(){
    alert("Apna College");
}
