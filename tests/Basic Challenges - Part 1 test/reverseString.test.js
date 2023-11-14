const {
  reverseString1,
  reverseString2,
} = require("../../DSA_70/Basic Challenges - Part 1/reverseString");
const word = "russian deplomat";
//first method
test("revers a given word using in built string methods", () => {
  expect(reverseString1(word)).toBe("tamolped naissur");
});
//second method
test("revers a given word using in built string methods", () => {
  expect(reverseString2(word)).toBe("tamolped naissur");
});
