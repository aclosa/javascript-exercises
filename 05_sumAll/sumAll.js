const sumAll = function(num1,num2) {
    let sumNum = 0
    if (num1 < 0 || num2 < 0 || typeof num1 != 'number' || typeof num2 != 'number'){
        return "ERROR"
    } if (num1 <= num2){
        for (let i = num1; i <= num2; i++){
            sumNum += i
        }
        return sumNum
    } if (num1 > num2) {
        for (let i = num2; i <= num1; i++){
            sumNum += i
        }
        return sumNum
    } 
     else {
        return "ERROR"
    }

};

// Do not edit below this line
module.exports = sumAll;
