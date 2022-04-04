let x = 37;
function getParticipants(handshakes){
let tyt=[];
let ii=[0];
if (tyt[0]!=8){
for (let i =0; tyt[0]!=8;i+=1){
ii[0] += i;                             // в ii собачатся таким образом числа: 0+1+2+3 и обновляется ii синхронно с i. 
if (ii[0]>=handshakes){
  console.log('v ife');
  console.log(ii[0]);
  tyt.push(8);
  return i+1;
}
}
}
}
console.log(x);
console.log(getParticipants(x));