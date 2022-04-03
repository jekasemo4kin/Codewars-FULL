function spinWords ( string ){
    let xx = [];
    let yy = string.split(" ");    
    if (string.split(' ').join('').length>1 ){
    for (let i = 0; i < yy.length; i++){   
        xx.push(yy[i]);        
    if (yy[i].length>4){       
        xx[i] = yy[i].split("").reverse().join(""); 
    }
    }
        return  xx.join(" "); 
    }
    else{
        return '';
    }
    }
    spinWords ("Hey fellow warriors");
    spinWords ( "This is a test");
    spinWords ( "This is another test");