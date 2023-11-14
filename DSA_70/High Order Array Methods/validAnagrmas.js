/**
 * @summary : {Anagrams} is a word or phrase formed by rearranging the letters of different word or phrase, typically using
 * all the original letters exactly once
 *
 */
function validAnagrams(str1, str2) {
  const freqCount1 = str1.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  const freqCount2 = str2.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  let anagram = Object.keys(freqCount1).every(
    (char) => freqCount1[char] === freqCount2[char]
  );
  return anagram;
}
module.exports = { validAnagrams };
