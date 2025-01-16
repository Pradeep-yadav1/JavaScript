// const square = (n) => n * n;
// console.log(square(5));

// let id3 = setInterval(() => {
//   console.log("Hello World");
// }, 2000);
// setTimeout(() => {
//   clearInterval(id3);
//   console.log("clear interval");
// }, 10000);

// PRACTICE QUESTION
const object = {
    message:'Hello, World!',
    logMessage(){
        console.log(this.message);
    }
};
setTimeout((object.logMessage),1000);

//question 4
let length=4;
function callback(){
    console.log(this.length);
}
const object2 = {
    length:5,
    method(callback){
        callback();
    },
};
object2.method(callback());

//question 1
let arrayAvg = (arr)=>{
    let total=0;
    for (let number of arr){
        total+=number;
    }
    return total/arr.length;
};
let arr =[1,2,3,4,5,6];
console.log(arrayAvg(arr));