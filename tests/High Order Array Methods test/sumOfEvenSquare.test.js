const sumOfEvenSquare = require("../../DSA_70/High Order Array Methods/sumOfEvenSquare");
test("test for finding sum of the given squares", () => {
  expect(sumOfEvenSquare([1, 2, 3, 4, 5])).toBe(20);
  expect(sumOfEvenSquare([-1, 0, 1, 2, 3, 4, 5])).toBe(20);
  expect(sumOfEvenSquare([-2, -1, 0, 1, 2, 3, 4, 5])).toBe(24);
  expect(sumOfEvenSquare([])).toBe(0);
});
