let str = ["hi","hello","bye","!"];

function concat(str){
    let result = "";
     for(let i=0; i<str.length; i++){
        result+= str[i];
     }
     return result;
}
concat(str);

/*function expression*/
const sum = function(a,b){
    return a+b;
}
sum(2,3);  /*use variable name to call function*/
console.log(sum);

/*higher order function*/
function multiGreet(func,count){
    for(let i=1; i<=count; i++){
        func();
    }
}

let greet = function(){
    console.log("hello");
}
multiGreet(greet,5);/*ONLY Variable name not calling */ 
multiGreet(function(){console.log("Namaste")},20);

/*higher order function*/
let odd = function(n){
    console.log(!(n%2 == 0));
}

let even = function(n){
    console.log(n%2 == 0);
}
odd(4);
even(6);

function oddevenfactory(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
    }else if(request == "even"){
        return function(n){
            console.log(n%2 == 0);
        }
    }else{
        console.log("wrong request");
    }
}

let request = "odd";//even
let func = oddevenfactory(request);
func(3);

//methods
const calc = {
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
};
calc.add(1,2);
//shorthand 
const calculator = {
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }
};