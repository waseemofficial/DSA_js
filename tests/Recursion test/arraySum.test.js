const arraySum = require("../../DSA_70/Recursion/arraySum");
test("sum of array ", () => {
  expect(arraySum([1, 2, 3, 4, 5])).toBe(15);
  expect(arraySum([1, 2, 3, 4, 5, 6])).toBe(21);
});
