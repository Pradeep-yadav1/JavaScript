  /*QUESTION---1 */
let arr = [1,2,3,4,5,6,2,3];
let num = 2;
for(let i=0; i<arr.length; i++){
    if(arr[i] == num){
        arr.splice(i,1);
    }
}
console.log(arr);

/*QUESTION--2*/
let number = 287152;
let sum = 0;
while(number != 0){
    let rem = number % 10;
    number = parseInt(number /10);
    sum += rem;
}
console.log(`the sum is ${sum}`);

/*QUESTION--3*/
let number2 = 287152;
let count = 0;
while(number2 != 0){
    let rem = number2 % 10;
    number2 = parseInt(number2 /10);
    count++;
}
console.log(`The no. of digits is ${count}`);

/*QUESTION--4*/
let num2 = prompt("Enter the number");
let fact = 1;
for(let i=1; i<=num2; i++){
    fact *= i;
}
console.log(`Tne factorial of ${num2} is ${fact}`);

/*QUESTION--5*/
let arr2 = [5,6,3,7,9,1,10];
let largest = 0;
for(let i=0; i<arr2.length; i++){
   if(largest<arr2[i]){
    largest = arr2[i];
   }
}
console.log(`The largest number in array is ${largest}`);