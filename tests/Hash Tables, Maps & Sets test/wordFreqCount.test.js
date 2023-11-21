const wordFreqCount = require("../../DSA_70/Hash Tables, Maps & Sets/wordFreqCount");
test("count the number of times a word appears in a string", () => {
  const expectedOutput1 = new Map([
    ["the", 2],
    ["quick", 1],
    ["brown", 1],
    ["fox", 1],
    ["jumps", 1],
    ["over", 1],
    ["lazy", 1],
    ["dog", 1],
  ]);
  const expectedOutput2 = new Map([
    ["lorem", 1],
    ["ipsum", 1],
    ["dolor", 1],
    ["sit", 1],
    ["amet", 1],
    ["con", 1],
    ["sectetur", 1],
    ["adipiscing", 1],
    ["elit", 1],
  ]);
  expect(wordFreqCount("the quick brown fox jumps over the lazy dog")).toEqual(
    expectedOutput1
  );
  expect(
    wordFreqCount("Lorem ipsum dolor  sit amet,con sectetur adipiscing elit")
  ).toEqual(expectedOutput2);
});
