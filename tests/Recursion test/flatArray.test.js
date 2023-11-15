const flatArray = require("../../DSA_70/Recursion/flatArray");
test("flatten the array ", () => {
  expect(flatArray([1, 2, [3, 4, 5, 6, [7, 8, 9]]])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);
  expect(
    flatArray([
      [1, 2],
      [3, 4, 5, 6, [7, 8, 9]],
    ])
  ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  /**  expect(
    flatArray([1, 2, [3, 4, 5, 6, [7, 8, 9]]], 10, 11, [[[12, 13, 15]]])
  ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  */
});
