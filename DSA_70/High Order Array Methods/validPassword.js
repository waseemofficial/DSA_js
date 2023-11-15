function validPassword(password) {
  // check the length of Password
  const isLengthValid = password.length >= 8;
  // check for Upper Case letters
  const hasUpperCase = password
    .split("")
    .some((char) => char === char.toUpperCase() && char !== char.toLowerCase());
  // check for Lower Case letters
  const hasLowerCase = password
    .split("")
    .some((char) => char === char.toLowerCase() && char !== char.toUpperCase());
  // check for numerical Digits in the Password
  const hasDigit = password
    .split("")
    .some((char) => !isNaN(parseInt(char, 10)));
  // return the values
  return isLengthValid && hasUpperCase && hasLowerCase && hasDigit;
}
module.exports = validPassword;
