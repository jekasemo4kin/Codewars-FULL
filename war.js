function numberOfPairs(gloves){
    var glovesX = gloves.reduce((acc, el)=> {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
    }, {})
    let z = 0;
    for(color in glovesX){
    z+=Math.floor(glovesX[color] / 2)
    }
    return z
    }
     