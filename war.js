let x = 8;
function nthFibo (n){
let arr=[0,1,1];
let i=4;
for (i; i<=n; i++){
arr.push(arr[i-2]+arr[i-3]);
}
return arr[n-1];
}
console.log(nthFibo(x));