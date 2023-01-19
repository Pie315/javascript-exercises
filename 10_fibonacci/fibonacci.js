const fibonacci = function(input) {
    let num = Number(input);
    let last = 0;
    let current = 1
    let temp = 0;
    if (num < 0) {
        return "OOPS"
    }
    
    for (i = 0; i < num - 1; i++) {
        temp = current;
        current += last;
        last = temp;
    }
    return current;

};

// Do not edit below this line
module.exports = fibonacci;
