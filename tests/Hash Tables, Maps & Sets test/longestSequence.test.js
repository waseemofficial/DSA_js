const longestSequence = require("../../DSA_70/Hash Tables, Maps & Sets/longestSequence");
test("Longest Consecutive Sequence", () => {
  expect(longestSequence([100, 4, 200, 0, 1, 3, 2])).toEqual(5);
  expect(longestSequence([0, 3, 7, 2, 5, 8, 4, 6, 9, 1])).toEqual(10);
});
