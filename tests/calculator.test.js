const calculator = require("../DSA_70/calculator");
test("test addition in calculator", () => {
  let num1 = 5;
  let num2 = 7;

  expect(calculator(num1, num2, (operator = "+"))).toBe(12);

  expect(calculator(num1, num2, (operator = "-"))).toBe(-2);
  expect(calculator(num1, num2, (operator = "*"))).toBe(35);

  expect(calculator(num1, num2, (operator = "/"))).toBeCloseTo(1.4, 4);

  expect(calculator(num1, num2, (operator = "**"))).toBe(78125);
  // expect(calculator(num1, num2, (operator = "^"))).toBe(78125);
  //   result = calculator(num1, num2, (operator = "^"));
  //   expect(calculator(num1, num2, (operator = "a"))).toThrow(
  //     new TypeError("ERROR")
  //   );
});
