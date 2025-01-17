let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
btn.addEventListener("click",async()=>{
    let country = document.querySelector("input").value;
    // console.log(country);
    let clzArr = await getClz(country);
    // console.log(clzArr);
    show(clzArr);
});

function show(clzArr){
    let list = document.querySelector("#list");
    list.innerText= "";
    for (clz of clzArr){
        console.log(clz.name);

        let li = document.createElement("li");
        li.innerText = clz.name;
        list.appendChild(li);
    }
}

async function getClz(country){
    try{
        let res = await axios.get(url+country);
        // console.log(res);
        return res.data;
    }catch(e){
       console.log(e); 
       return [];
    }
}