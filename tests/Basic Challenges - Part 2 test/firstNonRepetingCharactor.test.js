const {
  firstNonRepetingCharactor,
  firstNonRepetingCharactor1,
} = require("../../DSA_70/Basic Challenges - Part 2/firstNonRepetingCharactor");
//first method
test("check which is the first non repeting charactor from the given word", () => {
  expect(firstNonRepetingCharactor("aabccdeff")).toBe("b");
  expect(firstNonRepetingCharactor("aabbcc")).toBe(null);
  expect(firstNonRepetingCharactor("hello world")).toBe("h");
  expect(firstNonRepetingCharactor("programming")).toBe("p");
  expect(firstNonRepetingCharactor("assassins")).toBe("i");
});
//second method
test("check which is the first non repeting charactor from the given word", () => {
  expect(firstNonRepetingCharactor1("aabccdeff")).toBe("b");
  expect(firstNonRepetingCharactor1("aabbcc")).toBe(null);
  expect(firstNonRepetingCharactor1("hello world")).toBe("h");
  expect(firstNonRepetingCharactor1("programming")).toBe("p");
  expect(firstNonRepetingCharactor1("assassins")).toBe("i");
});
