const getsum = require("../../DSA_70/Basic Challenges - Part 1/sum");
test("test for getsum", () => {
  const result = getsum(11, 5);
  expect(result).toEqual(16);
});
