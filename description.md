# Codewars - 4
### Disemvowel Trolls
---


Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.


---
```javascript

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

```
