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
    pad = (string,length) =>{
        if(string.length === length.length){
            return string;
        } else if(string.length != length.length){
            let paddingDiff = Math.floor(Math.abs(string.length - length.length))/2;
        }
    }
}



// Do not write or modify code below this line.
module.exports = _;