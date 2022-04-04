let s = "22";
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

