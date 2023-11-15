function reverseStringRecursion(str) {
  if (str === "") {
    return "";
  }

  return reverseStringRecursion(str.substr(1)) + str.charAt(0);
}
module.exports = reverseStringRecursion;
