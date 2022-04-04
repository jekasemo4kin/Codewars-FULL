# Codewars - 5
### Isograms
---


An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

### Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)


---
```javascript

let str1 = "abcdefghijklmnopqrstuvwxyz  ";
function isIsogram(str)
{
let x = str.toLowerCase().split("").filter(function(e){return e!=" "});  // массив всего отфильтровал на пробелы - их терь нету в х
let i;
let k=[];
    let compar = function (comp)
    { 
      for(comp; comp<x.length; comp++)
      {
      if (x[comp]===x[i] && comp!=i) 
      {
        console.log("В цикле компара");
        k[0]=Boolean(false);
      }
      }
      console.log("Зашёл в функцию и итог хз");
    }
        for (i=0; i<x.length;i++)
        {
          compar(i)
          console.log("Я после ft");
        }     
          return !(k[0]!=undefined);
}
console.log((isIsogram(str1)));

```
