//const { format } = require("express/lib/response");
const {
  reverseString1,
} = require("../Basic Challenges - Part 1/reverseString");
function palindromeCheck1(str) {
  const formatedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = reverseString1(str)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
  return formatedStr === reversedStr;
}
function palindromeCheck2(str) {
  const formattedStr = removeNonAlphaNumeric(str.toLowerCase());
  return formattedStr;
}
function removeNonAlphaNumeric(str) {
  let formattedString = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphaNumeric(char)) {
      formattedString += char;
    }
  }
  const reverseStr = reverseString(formattedString);
  console.log(reverseStr);
  return formattedString === reverseStr;
}
function isAlphaNumeric(char) {
  //vertex42.com/Excel/Tips
  //lowercase a-z 97-122 0-9numbers 48-57
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || //numbers 0-9
    (code >= 97 && code <= 122) // lower case a-z
  );
}
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
module.exports = { palindromeCheck1, palindromeCheck2 };
