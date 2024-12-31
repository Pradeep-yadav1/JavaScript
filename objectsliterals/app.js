const student = {
    name:"Pradeep",
    age:22,
    marks:96.6
};

const item ={
    price:100.98,
    discount: 50,
    colors : ["red","pink"]
};

const post={
    username:"@pradeep",
    content:"This is my post.",
    likes:150,
    reposts:5,
    tags:["@yadav","@coders"]
};
/*nested objects*/
const classinfo ={
    pradeep :{
        roll:26,
        city:"Dharan"
    },
    aman:{
        roll:2,
        city:"Itahari"
    },
    suraj:{
        roll:42,
        city:"Butwal"
    }
};

/*Array of objects*/
const classinfo2 = [
    {
        name:"Pradeep",
        grade:"A",
        roll: 26
    },
    {
        name:"suraj",
        grade:"O",
        roll: 42
    },
    {name:"Aman",
        grade:"B",
        roll: 2
    }
];

Math.abs(-5);
Math.pow(2,4);
Math.floor(5.88);/*round off to nearest and smallest intezer*/
Math.floor(-5.6);
Math.ceil(5.5);/*round off to largest intezerr*/
Math.random();/*generate random value 0=<---<1 not 1*/

/*random no. betwn 1 to 10 */
console.log( `The random number is :${Math.floor(Math.random()*10)+1}`);