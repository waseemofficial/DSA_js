const permutations = require("../../DSA_70/Recursion/permutations");
test("permutations", () => {
  expect(permutations("abc")).toEqual([
    "abc",
    "acb",
    "bac",
    "bca",
    "cab",
    "cba",
  ]);
  expect(permutations("ab")).toEqual(["ab", "ba"]);
  //expect(permutations("github")).toEqual();
});
