const validPassword = require("../../DSA_70/High Order Array Methods/validPassword");
test("validate the given Password", () => {
  expect(validPassword("password")).toBe(false);
  expect(validPassword("password123")).toBe(false);
  expect(validPassword("PASSWORD123")).toBe(false);
  expect(validPassword("Password123")).toBe(true);
});
