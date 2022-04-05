function duplicateEncode(words){
  const x = words.toLowerCase().split('');
return x.map(word => { 
return x.filter(y => y===word).length !==1 ? ")" : "(";
}).join("");
}