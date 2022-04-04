# Codewars - 6
### Digits explosion
---


Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

### Examples
explode("312")
should return :

"333122"
explode("102269")
should return :

"12222666666999999999"

---
```javascript

let s = "231";
function explode(s) {
s=s.split("");               // массив 
console.log(s);
let i,i2;                  //итерируемое орудие 2
let q;                      //конкретный элемент
let x=[];                   //новый массив
for (i=0;i<s.length; i++)
{ 
  q=s[i];
  console.log(i +" ---i");
console.log(i2 +" ---i2");
console.log(q +" ---q");
console.log("---gg");
  for (i2=0;i2<q;i2++){
console.log(i +" i");
console.log(i2 +" i2");
console.log(q +" q");
console.log("Итерация");
x.push(q);
  }
}
  return x.join('');
}
console.log(explode(s));

```
