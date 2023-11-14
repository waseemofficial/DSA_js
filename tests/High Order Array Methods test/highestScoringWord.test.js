const {
  highestScoringWord,
  highestScoringWord1,
} = require("../../DSA_70/High Order Array Methods/highestScoringWord");
test("find the highest scoring word", () => {
  expect(highestScoringWord("Hello my name is xavier")).toBe("xavier");
  expect(highestScoringWord("who is the PM of India?")).toBe("who");
  expect(highestScoringWord("Let's go to Dubai")).toBe("to");
});
//second method using Reduce
test("find the highest scoring word", () => {
  expect(highestScoringWord1("Hello my name is xavier")).toBe("xavier");
  expect(highestScoringWord1("who is the PM of India?")).toBe("who");
  expect(highestScoringWord1("Let's go to Dubai")).toBe("to");
});
