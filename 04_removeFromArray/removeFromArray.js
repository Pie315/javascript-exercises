const removeFromArray = function(origList, ...toBeRemoved) { // toBeRemoved is a list
    
    let returnList = origList;
    for (let index in toBeRemoved) { // loops for each item ro be removed
        for(let listPosition in origList) { // loops through list
            if (toBeRemoved[index] === origList[listPosition]) {
                returnList.splice(listPosition,1);
            }
        }
    } return returnList;
};

// Do not edit below this line
module.exports = removeFromArray;