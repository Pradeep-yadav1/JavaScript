let gameSeq = [];
let userSeq = [];
let highest = [];
let btns = ["pink", "lightblue", "orange", "purple"];

let started = false;
let level = 0;

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game started");
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("gameflash");
  setTimeout(function () {
    btn.classList.remove("gameflash");
  }, 300);
}

let h2 = document.querySelector("h2");

function levelUp() {
  userSeq = [];
  level++;
  highest.push(level);

  h2.innerText = `Level ${level}`;

  let randomidex = Math.floor(Math.random() * 3);
  let randomcolor = btns[randomidex];
  let randombtn = document.querySelector(`.${randomcolor}`);
  //   console.log(randomidex);
  //   console.log(randomcolor);
  //   console.log(randombtn);
  gameSeq.push(randomcolor);
  console.log(gameSeq);
  gameFlash(randombtn);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 300);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1200);
    }
  } else {
    let max = highest.reduce((max,el) => {
        if(max>el)
            return max;
        else{
            return el;
        }
    })
    h2.innerHTML = `<b><span style="color:red;">Game Over</span></b>.Your score is <b>${level}<br> Highest score is ${max}</b><br> Press Any key to start `;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 1000);
    reset();
  }
}

function btnPress() {
  console.log(this);
  let btn = this;
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
