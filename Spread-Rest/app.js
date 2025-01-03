//SPREAD FUNCTION-> expands an iterable into multiple values
console.log(..."helloworld");

let arr = [1, 2, 3, 4, 5, 7, 4, 0];
Math.min(...arr);
console.log(...arr);

//SPREAD ARRSY LITERALS
let arr2 = [1, 2, 3, 4, 5];
let newArr = [...arr2];
console.log(newArr); //same arr but new one no change in original

let odd = [1, 3, 5, 7];
let even = [2, 4, 6, 8];
let nums = [...odd, ...even];
console.log(nums);

//SPREAD with OBJECT LITERALS 
const data = {
    email:"pradeep@gmail.com",
    password:"abcd",
};
const dataCopy = {...data,id:123};

let arr3 = [1,2,3,4];//value
let obj1 = {...arr3};//obj->key:value

let obj2 = {..."hello"};

//REST
function sum (...args){ // due to rest args become arrays so we can aply methods
    for(let i=0; i<args.length;i++){
        console.log("you gave us:",args[i]);
    }
    args.push(1);
    console.log(args);
}
//but some arguments are inbuilt they are not function they are collection of argumnts
function min (){
    console.log(arguments);
    console.log(arguments.length);
    arguments.push(1);//error bcz args is not a function its only a collection
}

function sum2 (...args){
    return args.reduce((sum,el)=>sum + el);
}
//sums(1,3,4,6);
function min (msg,...args){
    console.log(msg);
    return args.reduce((min,el)=>{
        if (min > el){
            return el;
        }else{
            return min;
        }
    });
}
//min("hello",2,5,7,9);

//destructuring arrays
let names = ["tony","thor","bruce","peter","wanda"];
//let winnner = names[0];
let [winnner,runnerup,...others] = names;//created varaiables not array

//destructuring object
const student = {
    name :"pradeep",
    age:22,
    class:12,
    subject:["hindi","nepali","maths"],
    username:"pradeep@123",
    password:"abcd",
};

let {username:user,password,city="delhi"} = student;
//here user is a new variable created