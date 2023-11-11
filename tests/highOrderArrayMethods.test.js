const {
  map1,
  filter1,
  filter2,
  reduce1,
  foreach1,
  find1,
  some1,
  every1,
  every2,
} = require("../DSA_70/highOrderArrayMethods");
describe("functanalit of higher order array methods", () => {
  test("map() method", () => {
    expect(map1()).toEqual([2, 4, 6, 8, 10]);
  });
  test("filter() method to find even number from [1,2,3,4,5]", () => {
    expect(filter1()).toEqual([2, 4]);
  });
  test("filter() method to find number greater then 2", () => {
    expect(filter2()).toEqual([3, 4, 5]);
  });
  test("reduce() method to find the sum of [1,2,3,4,5]", () => {
    expect(reduce1()).toEqual(15);
  });
  test("forEach()0 'dosent retuen any thing'", () => {
    //using forEach() find the sum of [1,2,3,4,5]
    expect(foreach1()).toEqual(15);
  });
  test("find() method to find next greatest number after 2 [1,2,3,4,5]", () => {
    expect(find1()).toEqual(3);
  });
  test("some() method to find if any even numbers are there in a given array [1, 3, 5, 7, 9, 11]", () => {
    expect(some1([1, 3, 5, 7, 9, 11])).toEqual(false);
    expect(some1([1, 3, 5, 6, 7, 9, 11])).toEqual(true); // 6
  });
  test("every() method to find number in given array [1,2,3,4,5] is greater then given option", () => {
    expect(every1(0)).toEqual(true);
    expect(every2(2)).toEqual(false);
  });
});
