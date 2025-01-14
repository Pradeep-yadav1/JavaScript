let msg="   hello  ";
console.log(msg.trim());
msg.toUpperCase();
msg.indexOf("h");
msg.indexOf("hello");
msg.indexOf('i');

let newMsg = msg.trim().toUpperCase();
console.log(newMsg);
let oldMsg = "iloveCoding";
console.log(oldMsg.slice(1,5));
console.log(oldMsg.slice(5));
console.log(oldMsg.slice(-4));

oldMsg.replace("love","do");
oldMsg.repeat(2);

let nums = [1,2,2,4,5]; 

let cars = ["maruti","audi","bmw"];
cars.push("nano");       /*last me insert hoga in arr*/
cars.pop();       /*last delet hoga & return  from arr*/
cars.unshift("ferrari");  /*start me insert*/
cars.shift();            /*delete from & return start*/

cars.indexOf("maruti");
cars.includes("audi");

cars.concat(nums);
cars.reverse();     /*original arr change*/

cars.slice(2);      /*same as string*/

/*splice:removes/replaces/add elements & original arr changes*/
cars.splice(0,1,"xuv");

cars.sort();/*convert in string & sort*/

let arr=['a','b','c','d'];
let arrCopy=arr;  /*refrence variable same array point and changes*/
