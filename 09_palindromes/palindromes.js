const palindromes = function (string) {
    string.toLowerCase();
    let charList = [];
    for (i = 0; i < string.length; i++) {
        charList[i] += string[i];
    }

    return charList;

    charList.filter((charList) => {
        switch(charList) {
            case "!":
                return false;
            case "?":
                return false;
            case " ":
                return false;
            case ".":
                return false;
            case ",":
                return false;
            default:
                return true; 
        } 
    });
};

// Do not edit below this line
module.exports = palindromes;
