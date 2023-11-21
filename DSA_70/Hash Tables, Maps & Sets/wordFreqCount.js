function wordFreqCount(str) {
  const words = str.toLowerCase().split(/\W+/);
  const wordFreq = new Map();
  for (const word of words) {
    if (word === "") {
      continue;
    }
    if (wordFreq.has(word)) {
      wordFreq.set(word, wordFreq.get(word) + 1);
    } else {
      wordFreq.set(word, 1);
    }
  }
  return wordFreq;
}
module.exports = wordFreqCount;
