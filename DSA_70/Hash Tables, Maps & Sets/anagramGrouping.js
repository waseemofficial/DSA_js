function anagramGrouping(words) {
  const anagramGroup = new Map();
  for (const word of words) {
    const sortedChar = word.split("").sort().join("");
    if (anagramGroup.has(sortedChar)) {
      anagramGroup.get(sortedChar).push(word);
    } else {
      anagramGroup.set(sortedChar, [word]);
    }
  }
  //const result=anagramGroup()
  return Array.from(anagramGroup.values());
}
module.exports = anagramGrouping;
