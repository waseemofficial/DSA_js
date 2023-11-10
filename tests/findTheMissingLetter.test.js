const {
  findTheMissingLetter,
  findTheMissingLetter1,
} = require("../DSA_70/findTheMissingLetter");
// first method
test("find the missing letter from the given array", () => {
  expect(findTheMissingLetter(["a", "b", "c", "e", "f"])).toBe("d");
  expect(findTheMissingLetter(["a", "b", "c", "d", "f"])).toBe("e");
  expect(findTheMissingLetter([])).toBe("");
});
// second method using Charactor Code
test("find the missing letter from the given array", () => {
  expect(findTheMissingLetter1(["a", "b", "c", "e", "f"])).toBe("d");
  expect(findTheMissingLetter1(["a", "b", "c", "d", "f"])).toBe("e");
  expect(findTheMissingLetter1(["p", "q", "s"])).toBe("r");
});
