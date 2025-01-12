 //Question-1
let arr = [9,8,4,2,4,6,7,1,3,5];
let num = 5;
function larger(arr,num){
    for(let i=0;i<arr.length; i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}
larger(arr,num);

//Question-2
let str = "abcdabcdefgggh";
function unique(str){
    let ans = ""
    for(let i=0; i<str.length;i++){
    let currchar = str[i];
    if(ans.indexOf(currchar) == -1){
        ans+=currchar;
    }
   }
    return ans;
}
unique(str);

//Question-3
let country = ["Australia","Germany","United States of America"];
function longestCountry(country){
    let indx = 0;
    for(let i=0; i<country.length; i++){
        let anslen = country[indx].length;
        let currLen =country[i].length;
        if(currLen > anslen){
            indx=i;
        }
    } 
    return country[indx]; 
}
longestCountry(country);

//Question-4
let str2 = "education";
let count = 0;
function vowelCount(str2){
    for(let i=0; i<str2.length;i++){
        if(str2.charAt(i)=="a" || 
            str2.charAt(i)=="e" ||
            str2.charAt(i)=="i" ||
            str2.charAt(i)=="o" ||
            str2.charAt(i)=="u"){
            count++;
        }
    }
    return count;
}
vowelCount(str2);
