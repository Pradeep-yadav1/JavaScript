console.log("hello world");
let pencilPrice = 10;
let erasorPrice = 5;
// let output = "The total price is : " + (pencilPrice + erasorPrice) + "rupees.";
let output = `The total price is : ${pencilPrice+erasorPrice}.`;
console.log(output);

let age=28;
if(age>=18){
    console.log("you can vote.");
}
let firstName="pradeep";
if(firstName=="pradeep"){
    console.log(`welcome ${firstName}`);
}

let color="red";
if(color==="red"){
    console.log("Stop");
}
else if(color==="yellow"){
    console.log("slow down");
}
else if(color==="green"){
    console.log("go on");
}

let str="ambulance";
if((str[0]=== "a") && (str.length > 3)){
    console.log("good string");
}
else{
    console.log("bad string");
}

console.log("this is a simple log");
console.error("this is a error");
console.warn("this is a warning");
alert("memory full");

let roll = prompt("Enter your name: ");
console.log(roll);