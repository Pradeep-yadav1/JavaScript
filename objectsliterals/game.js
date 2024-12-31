const max = prompt("enter the max number");
const random = Math.floor(Math.random()*max)+1;

let guess = prompt("guess the number ");

while(true){
    if(guess == "quit"){
        console.log("quitting game");
        break;
    }
    if(guess == random){
        console.log("you are right! congrats!! random number was",random);
        break;
    }
    else if(guess < random){
        guess = prompt("hint : your guess is small,try larger number");
    }
    else{
        guess = prompt("hint : your guess is large,try smaller number");
    }
}