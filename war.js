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


