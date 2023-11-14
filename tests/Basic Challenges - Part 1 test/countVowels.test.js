const countVowels = require("../../DSA_70/Basic Challenges - Part 1/countVowels");
test("count how many vowles are there in a given word or a sentence", () => {
  expect(countVowels("hello")).toBe(2);
  expect(countVowels("why")).toBe(0);
  expect(countVowels("mississipi")).toBe(4);
  expect(countVowels("javascript")).toBe(3);
  expect(countVowels("OpernAI Chatbot")).toBe(6);
  expect(countVowels("Coding Challenge")).toBe(5);
});
