let str1 = "abcdefghijklmnopqrstuvwxyz  ";
function isIsogram(str)
{
let x = str.toLowerCase().split("").filter(function(e){return e!=" "});  // массив всего отфильтровал на пробелы - их терь нету в х
//console.log(x[26]);
let i;
let k=[];
    let compar = function (comp)
    { 
      for(comp; comp<x.length; comp++)
      {
      //  console.log(comp);
      if (x[comp]===x[i] && comp!=i) 
      {
        console.log("В цикле компара");
        //console.log(k[0]);
        k[0]=Boolean(false);
        //console.log(k[0]);
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
alert((isIsogram(str1)));
let kk = [];
//console.log(Boolean(kk[0]));




