function findTheMissingLetter(arr) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const startIndex = alphabet.indexOf(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== alphabet[startIndex + i]) {
      return alphabet[startIndex + i];
    }
  }
  return "";
}
// second method using Character method / Code
function findTheMissingLetter1(arr) {
  let start = arr[0].charCodeAt(0);

  //  const startIndex = alphabet.indexOf(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i].charCodeAt(0);
    if (current - start > 1) {
      return String.fromCharCode(start + 1);
    }
    start = current;
  }
  return "";
}
//missing Letter Refactored using Higher Order Array Methods
function findTheMissingLetterRefactor(arr) {
  let start = arr[0].charCodeAt(0);

  const missingCharCode = arr
    //.slice(1)
    .map((char) => char.charCodeAt(0))
    .find((current) => {
      if (current - start > 1) {
        return true;
      }
      start = current;
      return false;
    });
  return missingCharCode ? String.fromCharCode(missingCharCode - 1) : "";
}
function findTheMissingLetterRefactor1(arr) {
  const missingCharCode = arr.filter((char, index) => {
    if (index === 0) {
      return false;
    }
    const prevCharCode = arr[index - 1].charCodeAt(0);
    const currentCharCode = char.charCodeAt(0);
    return currentCharCode - prevCharCode > 1;
  })[0];
  return missingCharCode
    ? String.fromCharCode(missingCharCode.charCodeAt(0) - 1)
    : "";
}

module.exports = {
  findTheMissingLetter,
  findTheMissingLetter1,
  findTheMissingLetterRefactor,
  findTheMissingLetterRefactor1,
};
