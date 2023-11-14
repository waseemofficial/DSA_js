const {
  removeDuplicates,
  removeDuplicates1,
  removeDuplicates2,
  removeDuplicates3,
} = require("../../DSA_70/Basic Challenges - Part 1/removeDuplicates");
//first method
test("renove duplicates alphebets from the given Array of words and numbers", () => {
  expect(removeDuplicates([true, true, false, false])).toEqual([true, false]);
  expect(removeDuplicates(["apple", "banana", "orange", "kiwi"])).toEqual([
    "apple",
    "banana",
    "orange",
    "kiwi",
  ]);
  expect(removeDuplicates(["the only car", "the"])).toEqual([
    "the only car",
    "the",
  ]);
  expect(removeDuplicates([1, 2, 3, 4, 4, 5, 5, 3, 4, 1])).toEqual([
    1, 2, 3, 4, 5,
  ]);
});
//second method
test("renove duplicates alphebets from the given word", () => {
  expect(removeDuplicates1("hhelloo")).toBe("helo");
  expect(removeDuplicates1("fellowship of thee riingss")).toBe(
    "felowship trng"
  );
  expect(removeDuplicates1("the only car")).toBe("the onlycar");
  expect(removeDuplicates1([1, 2, 3, 4, 4, 5, 5, 3, 4, 1])).toBe("12345");
});

//third method
test("renove duplicates alphebets from the given word and sentences also", () => {
  expect(removeDuplicates2("hhelloo")).toBe("helo");
  expect(removeDuplicates2("fellowship of thee riingss")).toBe(
    "felowship  t rng"
  );
  expect(removeDuplicates2("the only car")).toBe("the only car");
});
// forth method using Set() method
test("renove duplicates alphebets from the given Array of words and numbers using Set() method", () => {
  expect(removeDuplicates3([true, true, false, false])).toEqual([true, false]);
  expect(removeDuplicates3(["apple", "banana", "orange", "kiwi"])).toEqual([
    "apple",
    "banana",
    "orange",
    "kiwi",
  ]);
  expect(removeDuplicates3(["the only car", "the"])).toEqual([
    "the only car",
    "the",
  ]);
  expect(removeDuplicates3([1, 2, 3, 4, 4, 5, 5, 3, 4, 1])).toEqual([
    1, 2, 3, 4, 5,
  ]);
});
