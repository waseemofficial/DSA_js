const maxSubArray = require("../../DSA_70/Time & Space Complexity/maxSubArray");
test("find the max sub array", () => {
  expect(maxSubArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toBe(27);
  expect(maxSubArray([2, 5, 3, 1, 11, 7, 6, 4], 3)).toBe(24);
  expect(maxSubArray([-2, -5, -3, -1, -11, -7, -6, -4], 4)).toBe(-11);
});
