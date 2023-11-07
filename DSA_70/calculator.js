/**
 * @summary : create a simple calculator
 * @pram {Number}
 * @pram {Number}
 * @pram {String}
 * @returns {number}
 */
function calculator(num1, num2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 / num1;
      break;
    case "**":
      result = num1 ** num2;
      break;
    default:
    //console.log(operator);
    //throw new TypeError("ERROR");
  }
  return result;
}
module.exports = calculator;
