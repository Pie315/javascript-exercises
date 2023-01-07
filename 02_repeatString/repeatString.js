const repeatString = function(inputStr, count) {
    if (count < 0) {
        return "ERROR";
    }
    
    let out = "";
    for(let i = 0; i < count; i++) {
        out += inputStr;
    }
    return out;
};

// Do not edit below this line
module.exports = repeatString;
