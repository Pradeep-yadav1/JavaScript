// async function greet(){
//     // throw "some random error";
//     return "hello!"; //returns a promise
// }

// greet()
// .then((result)=>{
//     console.log("promise was resolved");
//     console.log("result was:",result)
// })
// .catch((err)=>{
//     console.log("promise was rejected with err:",err)
// })

// let demo = async()=>{
//     return 5;
// }


//await
function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    });
}

async function demo(){
    await getNum();
    await getNum();
    getNum();
}

let h1 = document.querySelector("h1");

function changeColor (color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let a = Math.floor(Math.random()*5)+1;
            if(a>3){
                reject("promise rejected");
            }

            h1.style.color = color;
            console.log(`color changed tp ${color}.`);
            resolve("color changed");
        },delay);
    });
}

async function getColor(){
    try{
        await changeColor("red",1000);
        await changeColor("green",1000);
        await changeColor("yellow",1000);
        await changeColor("orange",1000);
        await changeColor("blue",1000);
    }catch(err){
        console.log(err);
        console.log("error caught");
    }
    let b =5;
    console.log(b);
    console.log(b+3);
}