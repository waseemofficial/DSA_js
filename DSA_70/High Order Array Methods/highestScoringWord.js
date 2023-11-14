function highestScoringWord(str) {
  const word = str.split(" ");
  const scores = word.map((word) => {
    let score = 0;
    for (const letter of word) {
      score += letter.charCodeAt(0) - 96;
    }
    return score;
  });
  let highestScore = 0;
  let highestIndex = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > highestScore) {
      highestScore = scores[i];
      highestIndex = i;
    }
  }
  return word[highestIndex];
}
//second method
function highestScoringWord1(str) {
  const words = str.split(" ");
  //console.log(words);
  const scores = words.map((word) => {
    return Array.from(word).reduce((score, letter) => {
      return score + letter.charCodeAt(0) - 96;
    }, 0);
  });
  //console.log(scores);
  const highestScore = Math.max(...scores);
  //  console.log(highestScore);
  const highestIndex = scores.indexOf(highestScore);
  return words[highestIndex];
}
module.exports = { highestScoringWord, highestScoringWord1 };
