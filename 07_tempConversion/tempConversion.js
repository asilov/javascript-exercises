const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5/9)
  let rounded = parseFloat(celsius.toFixed(1))
  return rounded
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * (9/5)) + 32
  let rounded = parseFloat(fahrenheit.toFixed(1))
  return rounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
