const twoSum = require("../../DSA_70/Hash Tables, Maps & Sets/twoSum");
test("test the two numbers in an array that sum up to answer", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  expect(twoSum([1, 2, 3, 4, 5, 5, 6], 10)).toEqual(
    //expect.arrayContanining([4, 5])
    [4, 5]
  );
  expect(twoSum([1, 2, 3, 4, 5, 5, 6], 10)).toEqual(
    expect.arrayContaining([4, 5])
  );
  // console.log(expect.arrayContaining([4, 5]));
});
