const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    if ((typeof(num1) != "number") || (typeof(num2) != "number")) {
        return "ERROR";
    }

let startNum = 0;
let endNum = 0;

    if (num2 > num1) {
        startNum = num1;
        endNum = num2;
    } else {
        startNum = num2;
        endNum = num1;
    }

let result = 0;

for (let i = startNum; i <= endNum; i++) {
    result += i;
}
return result;
}

// Do not edit below this line
module.exports = sumAll;
