const {
  uniqueChar,
  uniqueChar1,
} = require("../../DSA_70/Basic Challenges - Part 2/uniqueChar");
test("find if the characters are repeted in the given string", () => {
  expect(uniqueChar("abcdefg")).toBe(true);
  expect(uniqueChar1("abcdefga")).toBe(false);
  expect(uniqueChar1("abcdefgA")).toBe(true);
  expect(uniqueChar1("")).toBe(true);
  expect(uniqueChar1("a")).toBe(true);
  expect(uniqueChar1("programming")).toBe(false);
});
//second method using Set()
test("find if the characters are repeted in the given string", () => {
  expect(uniqueChar1("abcdefg")).toBe(true);
  expect(uniqueChar1("abcdefga")).toBe(false);
  expect(uniqueChar1("abcdefgA")).toBe(true);
  expect(uniqueChar1("")).toBe(true);
  expect(uniqueChar1("a")).toBe(true);
  expect(uniqueChar1("programming")).toBe(false);
});
