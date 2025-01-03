let smallImg= document.getElementsByClassName("oldImg");

for(let i=0; i<smallImg.length;i++){
    console.log(smallImg[i].src);
}

document.getElementsByTagName("p")[1].innerText;

console.log(document.querySelector('#myId'));
console.log(document.querySelector('.myClass'));
console.log(document.querySelector('div a'));
 
//manipulation
let para = document.querySelector('p');
console.dir(para);
para.innerText;
para.innerHTML;
para.textContent;
para.innerHTML = `<u>${para.innerText}</u>`;

//manipulating attributes
let image = document.querySelector('img');
image.getAttribute('id');//to get attribute
image.setAttribute('id','spidermanimg');// to set value to new

//MANIPULATING STYLE
let links = document.querySelectorAll(".box a");
for(link of links){
    link.style.color = "purple";//inline css
}

// for(let i=0;i< links.length;i++){
//     links[i].style.color = "purple";
// }

let heading = document.querySelector('h1');
heading.classList.add("green");
heading.classList.remove('green');
heading.classList.contains("yellow");

//NAVIGATION
let h4 = document.querySelector('h4');
h4.parentElement;

let box = document.querySelector('.box');
box.children;
box.childElementCount;
let img = document.querySelector('img');
img.previousElementSibling.style.color = "green";

//ADDING ELEMENTS ON PAGE
 let newP = document.createElement('p');
 console.dir(newP);
 newP.innerText = "hi,i am a new p";
 console.dir(newP);
 let body = document.querySelector('body');
 body.appendChild(newP); 
newP.append("add some text");

// prepend-> same but in start add 

 //insertAdjacentElement
 let btn = document.createElement('button');
 btn.innerHTML = "NEW BUTTON!";
 let p = document.querySelector('p');
 p.insertAdjacentElement('beforebegin',btn);
 p.insertAdjacentElement('afterbegin',btn);
 p.insertAdjacentElement('beforeend',btn);
 p.insertAdjacentElement('afterend',btn);

 btn.remove();
 p.removeChild(btn);



