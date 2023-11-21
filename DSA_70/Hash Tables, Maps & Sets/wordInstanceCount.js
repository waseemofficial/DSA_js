const HashTable = require("./customHashTable");
function wordInstanceCount(str, word) {
  let words = str.toLowerCase().split(/\W+/);
  const wordFreq = new HashTable();
  const targetWord = word.toLowerCase();
  let count = 0;
  for (const currentWord of words) {
    if (currentWord === "") {
      continue;
    }
    if (wordFreq.has(currentWord)) {
      wordFreq.set(currentWord, wordFreq.get(currentWord) + 1);
    } else {
      wordFreq.set(currentWord, 1);
    }
    if (currentWord === targetWord) {
      count = wordFreq.get(currentWord);
    }
  }
  return count;
}
module.exports = wordInstanceCount;
