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
        } else if(startVal > endVal){
            startValHolder = startVal;
            startVal = endVal;
            endVal = startValHolder;
        } else if(number>= starVal && number <= endVal){
            
        }
    }
}



// Do not write or modify code below this line.
module.exports = _;