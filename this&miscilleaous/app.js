const student = {
    name : "Pradeep",
    age : 22,
    eng: 98,
    math : 96,
    phy : 89,
    getAvg(){
        console.log(this);
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
};

function getAvg(){
    console.log(this);
}

// try and catch
console.log("hello");
console.log("hello");
console.log("hello");
try{
    console.log(a);
}catch(err){
    console.log("caught an error..a is not defined");
    console.log(err);
}
console.log("hello");

// Arrow function 
const sum = (a,b) => {
    console.log(a+b);
};

const cube = n => {
    return n * n * n;
};

// implicit return in arrow
const mul = (a,b) => ( a*b);
const mult = (a,b) => a*b;

// setTimeout
console.log("hi there!");
setTimeout(()=>{
    console.log("tech and code");
},4000);
console.log("welcome to ");

// setInterval
let id = setInterval(() => {
    console.log("Tech and code");
},2000);
console.log(id);
clearInterval(id); //for stoping the repeating of code run

//this with arrow 
const student2 = {
    name:"Pradeep",
    marks:98,
    prop:this,//global scope
    getName:function(){
        console.log(this);
        return this.name;
    },
    getMarks : ()=>{
        console.log(this);//PARENT'S scope -> window
        return this.marks;
    },
    getInfo1 :function(){
        setTimeout(()=>{
            console.log(this);//this ka parent getinfo jisko student call lagata so finally student print
        },2000)
    },
    getInfo2 :function(){
        setTimeout(function(){
            console.log(this);//this ko call student lagaraha
        },2000)
    },
};