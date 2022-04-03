let x = ("11 0 -2233 4356 92351");
function highAndLow(numbers) {
    let arr = numbers.split(" ");
    console.log (arr);
    return (    `${Math.max.apply(null, arr)} ${Math.min.apply(null, arr)}`    );
  }
console.log (highAndLow(x));

highAndLow("1 2 3 4 5");  
highAndLow("1 2 -3 4 5"); 
highAndLow("1 9 3 4 -5");