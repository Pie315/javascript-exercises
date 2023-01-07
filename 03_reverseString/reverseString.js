const reverseString = function(inputStr) {
    let output = "";

    for (let i = inputStr.length -1; i >= 0; i--) {
        output += inputStr[i];
    }

    return output;
};

// Do not edit below this line
module.exports = reverseString;
