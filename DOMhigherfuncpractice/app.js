//question --1
let arr = [2,4,6,8,5];
let square = arr.map((el)=> el*el);
console.log(square);

let sum = arr.reduce((res,el) => res + el);
console.log(sum);

let avg = sum/arr.length;
console.log(avg);

//Question--2
console.log(arr.map((el) => el + 5));

//Question--3
let names  = ["pradeep","suraj","darpan","ranjan","rajesh"];
console.log(names.map((el) => el.toUpperCase()));

//Question--4
const doubleAndReturnArgs = (arr,...args) => [
    ...arr,
    ...args.map((el)=>el*2),
];

doubleAndReturnArgs([1,2,3],4,6);
doubleAndReturnArgs([2],4,6);

//Question--5
const obj1 = {
    name:"pradeep",
    roll:26,
};
const obj2 = {
    address:"delhi",
    age:15,
};

function mergeObjects(obj1,obj2){
    return {...obj1,...obj2};
}
console.log(mergeObjects(obj1,obj2));

//if obj1 & obj2 have same key then value from 2 overwrite 1's value



