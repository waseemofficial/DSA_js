const slidingWindow = require("../../DSA_70/Time & Space Complexity/slidingWindow");
it("sum of max array using slideing window ", () => {
  expect(slidingWindow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toBe(27);
  expect(slidingWindow([2, 5, 3, 1, 11, 7, 6, 4], 3)).toBe(24);
  expect(slidingWindow([-2, -5, -3, -1, -11, -7, -6, -4], 3)).toBe(-9);
});
