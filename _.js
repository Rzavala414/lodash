const _ = {
    clamp: function(number,lower,upper){
        let clampedNum1 = Math.max(number,lower)
        let clampedNum2 = Math.min(clampedNum1,upper)
        return clampedNum2;
    }
}



// Do not write or modify code below this line.
module.exports = _;