const countOccurrences = require("../DSA_70/countOccurrences");
test("count the number of times a charactir appeares in the given word", () => {
  let word = "jaanbazalima";
  const result = countOccurrences(word, "a");
  expect(result).toBe(5);
  expect(countOccurrences("jaanbbazalima", "j")).toBe(1);
  expect(countOccurrences("jaanbbazalima", "z")).toBe(1);
  expect(countOccurrences("jaanbbazalima", "b")).toBe(2);
});
