const {
  countOccurrences,
  countOccurrences1,
} = require("../DSA_70/countOccurrences");
// first method
test("count the number of times a charactir appeares in the given word using for loop and if condition", () => {
  let word = "jaanbazalima";
  const result = countOccurrences(word, "a");
  expect(result).toBe(5);
  expect(countOccurrences("jaanbbazalima", "j")).toBe(1);
  expect(countOccurrences("jaanbbazalima", "z")).toBe(1);
  expect(countOccurrences("jaanbbazalima", "b")).toBe(2);
});
//second method
test("count the number of times a charactir appeares in the given word using .split", () => {
  let word = "jaanbbazalima";
  const result = countOccurrences1(word, "a");
  expect(result).toBe(5);
  expect(countOccurrences1(word, "j")).toBe(1);
  expect(countOccurrences1(word, "z")).toBe(1);
  expect(countOccurrences1(word, "b")).toBe(2);
});
