const {
  findTheMissingLetter,
  findTheMissingLetter1,
  findTheMissingLetterRefactor,
  findTheMissingLetterRefactor1,
} = require("../../DSA_70/Basic Challenges - Part 2/findTheMissingLetter");
// first method
test("find the missing letter from the given array", () => {
  expect(findTheMissingLetter(["a", "b", "c", "e", "f"])).toBe("d");
  expect(findTheMissingLetter(["a", "b", "c", "d", "f"])).toBe("e");
  expect(findTheMissingLetter1(["A", "B", "C", "D", "F"])).toBe("E");
  expect(findTheMissingLetter([])).toBe("");
});
// second method using Charactor Code
test("find the missing letter from the given array", () => {
  expect(findTheMissingLetter1(["a", "b", "c", "e", "f"])).toBe("d");
  expect(findTheMissingLetter1(["a", "b", "c", "d", "f"])).toBe("e");
  expect(findTheMissingLetter1(["A", "B", "C", "D", "F"])).toBe("E");
  expect(findTheMissingLetter1(["p", "q", "s"])).toBe("r");
});

//missing Letter Refactored using Higher Order Array Methods
test("find the missing letter from the given array", () => {
  expect(findTheMissingLetterRefactor(["a", "b", "c", "e", "f"])).toBe("d");
  expect(findTheMissingLetterRefactor(["a", "b", "c", "d", "f"])).toBe("e");
  expect(findTheMissingLetterRefactor(["A", "B", "C", "D", "F"])).toBe("E");
  expect(findTheMissingLetterRefactor(["p", "q", "s"])).toBe("r");
});
test("find the missing letter from the given array", () => {
  expect(findTheMissingLetterRefactor1(["a", "b", "c", "e", "f"])).toBe("d");
  expect(findTheMissingLetterRefactor1(["a", "b", "c", "d", "f"])).toBe("e");
  expect(findTheMissingLetterRefactor1(["A", "B", "C", "D", "F"])).toBe("E");
  expect(findTheMissingLetterRefactor1(["p", "q", "s"])).toBe("r");
});
