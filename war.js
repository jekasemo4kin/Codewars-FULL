var wp = function(n){
    if (n>=0 && parseFloat(Math.sqrt(n))===parseInt(Math.sqrt(n))) {
  return true 
  } else {
  return false
  }
}
console.log( wp(169) )