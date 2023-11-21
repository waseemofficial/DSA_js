const symmetricDifferences = require("../../DSA_70/Hash Tables, Maps & Sets/symmetricDifferences");
test("Symmetric Differences", () => {
  expect(symmetricDifferences([1, 2, 3], [2, 3, 4])).toEqual([1, 4]);
  expect(symmetricDifferences([1, 2, 3, 4], [2, 3, 4, 5])).toEqual([1, 5]);
  expect(symmetricDifferences([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 4, 5]);
  expect(symmetricDifferences([1, 2, 2, 3, 4], [2, 3, 3, 4, 5])).toEqual([
    1, 5,
  ]);
  expect(symmetricDifferences([1, 2, 3, 4, 5], [5, 4, 3, 2, 1])).toEqual([]);
  expect(symmetricDifferences([1, 2, 3], [4, 5, 6])).toEqual([
    1, 2, 3, 4, 5, 6,
  ]);
});
