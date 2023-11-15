const numRange = require("../../DSA_70/Recursion/numRange");
test("number range ", () => {
  expect(numRange(1, 5)).toEqual([1, 2, 3, 4, 5]);
  expect(numRange(1, 2)).toEqual([1, 2]);
  expect(numRange(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(numRange(7, 7)).toEqual([7]);
  expect(numRange(3, 7)).toEqual([3, 4, 5, 6, 7]);
});
