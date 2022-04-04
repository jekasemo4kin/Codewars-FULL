# Codewars - 9
### Multiples of 3 or 5
---

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.


---
```javascript

let num = 13;
function solution(number){
    let vnesh;
    if(number>3){
let arr=[];
for (let i=0; i<=number; i++){
arr.push(i);
}
 arr.splice(arr.length-1,1);
let nevv = arr.map(elem=> {
    if((elem/3)===parseInt(elem/3) || (elem/5)===parseInt(elem/5) ) {
        console.log(elem);
        return elem
    } 
})
console.log(nevv);
nevv = nevv.filter(  function(qq) {
    return  qq !== undefined;
})

vnesh = nevv.reduce((acc,item)=> acc+item);  // сумма элемов из массива           
return vnesh;
}
return 0;
}
console.log(solution(num));




```
