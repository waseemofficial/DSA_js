const hashTable = require("./customHashTable");
function anagramGroupingHash(words) {
  const anagramGroups = new hashTable();
  for (const word of words) {
    const sortedChar = word.split("").sort().join("");
    if (anagramGroups.get(sortedChar)) {
      anagramGroups.get(sortedChar).push(word);
    } else {
      anagramGroups.set(sortedChar, [word]);
    }
  }
  return anagramGroups.getValues();
}
module.exports = anagramGroupingHash;
