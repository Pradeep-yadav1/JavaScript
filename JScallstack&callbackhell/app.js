// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }
// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }
// three();

//JS IS A SINGLE THREADED
//CALLBACK HELL
h1 = document.querySelector("h1");

function changeColor(color, delay, nextColor) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextColor) nextColor();
  }, delay);
}

changeColor("red", 1000, () => {
  changeColor("orange", 1000, () => {
    changeColor("green", 1000, () => {
      changeColor("blue", 1000, () => {
        changeColor("yellow", 1000);
      });
    });
  });
});
//callbacks nesting--> callback hell