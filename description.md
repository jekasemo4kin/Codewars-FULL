# Codewars - 7
### Handshake problem
---


Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".

Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once. He also knows that some of the possible handshake combinations may not happen.

However, Johnny would like to know the minimal amount of people that participated this year just by counting all the handshakes.

Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people needed to perform these handshakes (a pair of farmers handshake only once).

---
```javascript

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

```
