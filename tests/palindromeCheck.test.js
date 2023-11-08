const {
  palindromeCheck1,
  palindromeCheck2,
} = require("../DSA_70/palindromeCheck");

//first method using Regular expressions
test("check if the given word is a Palindrome", () => {
  expect(palindromeCheck1("racecar")).toBe(true);
  expect(palindromeCheck1("racecars")).toBe(false);
  expect(palindromeCheck1("racecar $%# #@")).toBe(true);
  expect(palindromeCheck1("A man, a plan, a canal, Panama")).toBe(true);
  expect(palindromeCheck1("12321")).toBe(true);
});
//secod method
test("check if the given word is a Palindrome", () => {
  expect(palindromeCheck2("racecar")).toBe(true);
  expect(palindromeCheck2("hellosolleh")).toBe(true);
  expect(palindromeCheck2("racecars")).toBe(false);
  expect(palindromeCheck2("racecar $%# #@")).toBe(true);
  expect(palindromeCheck2("A man, a plan, a canal, Panama")).toBe(true);
  expect(palindromeCheck2("12321")).toBe(true);
});
