const convertToCelsius = function(FahrenheitIn) {
  let celsiusOut = ((FahrenheitIn -32) * (5/9));
  celsiusOut = ((Math.round(celsiusOut * 10))/10);
  return celsiusOut;
}

const convertToFahrenheit = function(CelsiusIn) {
  let fahrenheitOut = ((CelsiusIn * (9/5)) + 32);
  return ((Math.round(fahrenheitOut * 10))/10);
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
