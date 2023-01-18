const add = function(...numbers) {
	let out = numbers.reduce((total, numbers) => {
    return total + numbers;
  }, 0);
  return out;
};

const subtract = function(a, ...numbers) {
  let out = numbers.reduce((total, numbers) => {
    return total - numbers;
  }, 0);
  return out + a;
};

const sum = function(numbers) {
	let out = numbers.reduce((total, numbers) => {
    return total + numbers;
  }, 0);
  return out;
};

const multiply = function(array) {
	let out = array.reduce((total, numbers) => {
    return total * numbers;
  });
  return out;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
	if (a == 0) {
    return 1;
  }
  
  for (i = a - 1; i > 1; i--) {
    a *= i;
  }
  return a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
