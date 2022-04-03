let fstr = ("This website is for losers LOL!");
function disemvowel(str) {
let arr = str.split("");
let newarr = [];
for (let i=0; i<arr.length; i++){
switch (arr[i]){
case "e":
case "u":
case "i":
case "o":
case "a":
case "E":
case "U":
case "I":
case "O":
case "A":
        delete arr[i];  
        break;
}
if(arr[i]!=undefined){
    newarr.push(arr[i]);
}
}
  str=[];
  str = Array.from(newarr).join("");
    return str;
}
console.log(disemvowel(fstr));