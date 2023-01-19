const findTheOldest = function(people) {
    let year = 2023;

    people.forEach((person) => {
        if (person.yearOfDeath == undefined) {
            person.yearOfDeath = year;
        } else {
            return;
        }
    });

    people.sort((a, b) => {
        if ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) {
            return -1;
        }
        if ((a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth)) {
            return 1;
        }
        return 0;
    });

    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
