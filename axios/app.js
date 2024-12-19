let btn = document.querySelector("button");

btn.addEventListener("click",async()=>{
   let fact = await getFacts();
//    console.log(fact);
   let p = document.querySelector("#result");
   p.innerText = fact;
})

let url = "https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(e){
        return "no fact found";
    }
}



//sending headers with axios
const url2 = "https://icanhazdadjoke.com/";

async function getJoke(){
    try{
        const config = {headers:{Accept:"application/json"}};
        let res = await axios.get(url,config);
        console.log(res.data);
    } catch(err){
        console.log(err);
    }
}