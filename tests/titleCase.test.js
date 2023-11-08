const titleCase = require("../DSA_70/titleCase");
test("make first letter of each word in an sentence to upper case", () => {
  expect(titleCase("hello world!")).toBe("Hello World!");
  expect(titleCase("hEllo woRld!")).toBe("Hello World!");
  expect(titleCase("HELLO world!")).toBe("Hello World!");
  expect(titleCase("this is javascript")).toBe("This Is Javascript");
});
