let arr=[7,9,0,-2];
let n=3;
let ans=arr.slice(0,n);
console.log(ans);


const favourite = "udaan";
let guess = prompt("guess the movie");
while((guess!=favourite)){
    if(guess == "quit"){
        console.log("you quit");
        break;
    }
    guess=prompt(" Wrong guess. Please try again");
}

if(guess == favourite){
    console.log("congrats!");
}

/*loops with array*/
let fruits = ["mango","orange","apple","banana","litchi"];
// for(let i=0; i< fruits.length; i++){
//     console.log(i,fruits[i]);
// }
// for(let i=fruits.length-1;i>=0; i--){
//     console.log(i,fruits[i]);
// }

/*nested array loop*/
let heroes = [["ironman","thor","hulk"],["batman","superman","flash"]];
// for(let i=0;i<=heroes.length; i++){
//     console.log(i,heroes[i],heroes[i].length);
//     for(let j=0; j<=heroes[i].length; j++){
//         console.log(`j=${j},${heroes[i][j]}`);
//     }
// }

/*for of loop--> to access individual item of array*/
for(fruit of fruits){
    console.log(fruit);
}

for(hero of heroes){
    console.log(hero);
    for(list of hero){
        console.log(list);
    }
}