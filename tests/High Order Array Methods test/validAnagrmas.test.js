/**
 * @summary : {Anagrams} is a word or phrase formed by rearranging the letters of different word or phrase, typically using
 * all the original letters exactly once
 *
 */
const {
  validAnagrams,
} = require("../../DSA_70/High Order Array Methods/validAnagrmas");
test("check if the given words are anagram", () => {
  expect(validAnagrams("app", "ppa")).toBe(true);
  expect(validAnagrams("hello", "world")).toBe(false);
  expect(validAnagrams("astronomer", "moonstarer")).toBe(true);
  expect(validAnagrams("Apple", "Banana")).toBe(false);
  expect(validAnagrams("listen", "silent")).toBe(true);
});
