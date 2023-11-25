const findPairSum = require("../../DSA_70/Stacks, Queues & Linked Lists/findPairSum");
test("find the pair of numbers that make the given sum", () => {
  expect(findPairSum([2, 6, 12, 116, 10], 22)).toEqual([12, 10]);
});
