function countVowels(str) {
  const formated = str.toLowerCase();
  console.log(formated);
  let count = 0;
  console.log(count);
  for (let i = 0; i < formated.length; i++) {
    const char = formated[i];
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
      console.log(count);
    }
  }
  return count;
}
module.exports = countVowels;
