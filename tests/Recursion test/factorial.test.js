const factorial = require("../../DSA_70/Recursion/factorial");
test("find factorial", () => {
  expect(factorial()).toBe(1);
  expect(factorial(5)).toBe(120);
  expect(factorial(4)).toBe(24);
  expect(factorial(3)).toBe(6);
  //expect(factorial(10)).toBe(3628800);
});
