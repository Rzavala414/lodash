const _ = {
    clamp: function(number,lower,upper){
        let clampedNum1 = Math.max(number,lower)
        let clampedNum2 = Math.min(clampedNum1,upper)
        return clampedNum2;
    },
    inRange(number,startVal,endVal){
        if(endVal === undefined){
            endVal = startVal;
            startVal = 0;
        }
         if(startVal > endVal){
            startValHolder = startVal;
            startVal = endVal;
            endVal = startValHolder;
        } 
        let isInRange = startVal <= number && number < endVal
            return isInRange;
        
    },
    words(string){
        return string.split(' ')
    },
    pad (string,length){
        if(string.length >= length){
            return string;
        };
            const startPadding = Math.floor(Math.abs(string.length - length))/2;
            const endPadding = length - string.length - startPadding;
            const paddedString =' '.repeat(startPadding) + string + ' '.repeat(endPadding)
            return paddedString
    },
//    TODO: has(object,key){
//         if(object === undefined){
//             return false
//         }
//     }
    invert:function(object){
       let invertedObject = {};
        for(let key in object){
            const originalValue = object[key];
             invertedObject = {originalValue : key}
        }
        return invertedObject;
    }
}



// Do not write or modify code below this line.
module.exports = _;