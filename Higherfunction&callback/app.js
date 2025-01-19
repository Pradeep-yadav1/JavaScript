let arr = [1, 2, 3, 4, 5];

arr.forEach((el) => {
  console.log(el);
});

arr.forEach(function (el) {
  console.log(el);
});

// let print=function(el){
//     console.log(el);
// };
// arr.forEach(print);

let arr2 = [
  {
    name: "pradeep",
    age: 22,
  },
  {
    name: "raju",
    age: 20,
  },
  {
    name: "fharhan",
    age: 19,
  },
];
arr2.forEach((people) => {
  console.log(people.age);
});

//MAP FUNCTION  makes a new arr of same size
let gpa = arr2.map((el) => {
  return el.marks / 10;
});

let num = [1, 2, 3, 4];
let sqr = num.map((el) => {
  return el * el;
});

//FILTER FUNCTION  jo true hoga oo pass karega filter 7 in new arr
let nums = [1, 2, 3, 4, 6, 8, 9, 10, 11];
let ans = nums.filter((el) => {
  return el % 2 == 0;
});

//EVERY FUNCTION returns true if every element of array gives true else false
// acts like AND
ans.every((el) => el % 2 == 0);

//SOME Function sames as OR

let arr4 = [10, 20, 30, 40];
let resu = arr4.every((el) => el % 10 == 0);
console.log(resu);
