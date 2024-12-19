// let jsonRes =
//   '{"fact":"The life expectancy of cats has nearly doubled over the last fifty years.","length":73}';

// let validRes = JSON.parse(jsonRes);//convert json into js objects
// console.log(validRes.fact);


// let student={
//     name:"pradeep",
//     marks:98,
// };
// JSON.stringify(student);//convert js into json //json data are string

// API Request
let url = "https://catfact.ninja/fact";

fetch(url)   //returns a promise
.then((res)=>{
    console.log(res);
    return res.json();
})
.then((data)=>{
    console.log(data);
    console.log("data1 :",data.fact);
    return fetch(url);
})
.then((res)=>{
    return res.json();
})
.then((data2)=>{
    console.log("data2 = ",data2.fact);
})
.catch((err)=>{
    console.log(`Error--`,err);
})

console.log("i am an Engineer");


async function getFacts(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    }catch(e){
        console.log("error:",e);
    }

    console.log("bye");
}