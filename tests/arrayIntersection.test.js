const {
  arrayIntersection,
  arrayIntersection1,
} = require("../DSA_70/arrayIntersection");
test("get a intersection of two array", () => {
  expect(
    arrayIntersection([1, 2, 3, 4, 5, 5, 9], [1, 2, 3, 4, 5, 7, 8])
  ).toEqual([1, 2, 3, 4, 5]);
  expect(arrayIntersection([1, 2, 3], [2, 3, 4, 5, 7, 8])).toEqual([2, 3]);
  expect(arrayIntersection([10, 20, 30], [30, 40, 50])).toEqual([30]);
});
test("get a intersection of two array using Set()", () => {
  expect(
    arrayIntersection1([1, 2, 3, 4, 5, 5, 9], [1, 2, 3, 4, 5, 7, 8])
  ).toEqual([1, 2, 3, 4, 5]);
});
