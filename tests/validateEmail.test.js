const { validateEmail, validateEmail1 } = require("../DSA_70/validateEmail");
test("validate Email Address", () => {
  expect(validateEmail("abcd@gmail.com")).toBe(true);
  expect(validateEmail("abc1_2d@@gmail.com")).toBe(false);
  expect(validateEmail("abcd@gmail")).toBe(false);
});
//second method
test("validate Email Address", () => {
  expect(validateEmail1("abcd@gmail.com")).toBe(true);
  expect(validateEmail("abc1_2d@@gmail.com")).toBe(false);
  expect(validateEmail("abcd@gmail")).toBe(false);
});
