const {
  findMissingNumber,
  findMissingNumber1,
} = require("../../DSA_70/Basic Challenges - Part 2/findMissingNumber");
test("find the missing number from the missing array", () => {
  expect(findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10])).toBe(5);
  expect(findMissingNumber([1, 2, 3, 5])).toBe(4);
  // missing logic
  expect(findMissingNumber([1, 2, 3, 4, 6, 7, 8, 10])).toBe(4);
});
// second method usinf reduce() method
test("find the missing number from the missing array", () => {
  expect(findMissingNumber1([1, 2, 3, 4, 6, 7, 8, 9, 10])).toBe(5);
  expect(findMissingNumber1([1, 2, 3, 5])).toBe(4);
  // missing logic
  expect(findMissingNumber1([1, 2, 3, 4, 6, 7, 8, 10])).toBe(4);
});
