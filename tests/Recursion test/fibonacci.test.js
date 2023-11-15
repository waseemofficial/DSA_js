const { fibonacci, fibonacci1 } = require("../../DSA_70/Recursion/fibonacci");
test("get the fibonacci series according to index", () => {
  expect(fibonacci(8)).toBe(21);
  expect(fibonacci(21)).toBe(10946);
  expect(fibonacci(0)).toBe(0);
  expect(fibonacci(1)).toBe(1);
  expect(fibonacci(5)).toBe(5);
  expect(fibonacci(2)).toBe(1);
  expect(fibonacci(3)).toBe(2);
});

// second method
test("get the fibonacci series according to index", () => {
  expect(fibonacci1(8)).toBe(21);
  expect(fibonacci1(21)).toBe(10946);
  expect(fibonacci1(0)).toBe(0);
  expect(fibonacci1(1)).toBe(1);
  expect(fibonacci1(5)).toBe(5);
  expect(fibonacci1(2)).toBe(1);
  expect(fibonacci1(3)).toBe(2);
});
