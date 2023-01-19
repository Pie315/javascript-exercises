const getTheTitles = function(books) {
    let out = [];
    books.forEach((books) => out.push(books.title));
    return out;
};

// Do not edit below this line
module.exports = getTheTitles;
