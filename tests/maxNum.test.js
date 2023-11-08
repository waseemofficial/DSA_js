const { findMaxNum1, findMaxNum2 } = require("../DSA_70/maxNum");
let array = [5, 32, 6, 41, 7, 8, 10, 9];
//first method
test("find max num from the given array using Math lib", () => {
  let result = findMaxNum1(array);
  expect(result).toBe(41);
});
// second meethod
test("find max num from the given array using Math lib", () => {
  let result = findMaxNum2(array);
  expect(result).toBe(41);
});
