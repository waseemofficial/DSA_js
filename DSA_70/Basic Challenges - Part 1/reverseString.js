function reverseString1(str) {
  return str.split("").reverse().join("");
}
function reverseString2(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
module.exports = { reverseString1, reverseString2 };
