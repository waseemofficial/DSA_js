const { power, power1 } = require("../../DSA_70/Recursion/power");
test("find the power of a number", () => {
  expect(power(5, 2)).toBe(25);
  expect(power(2, 2)).toBe(4);
  expect(power(2, 5)).toBe(32);
});
//second method
test("find the power of a number", () => {
  expect(power1(5, 5)).toBe(3125);
  expect(power1(2, 8)).toBe(256);
  expect(power1(1, 5)).toBe(1);
  expect(power1(10, 1)).toBe(10);
  expect(power1(10, 0)).toBe(1);
});
