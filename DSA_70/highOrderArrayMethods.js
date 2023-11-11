const number = [1, 2, 3, 4, 5];
/**
 * @summary : {map} Transforms array elements with a provided function, creating a new array.
 * @param : (num,index,arr)
 */
function map1() {
  const double = number.map((num, index, arr) => {
    //console.log(index)
    //console.log(arr)
    return num * 2;
  });
  return double;
}
/**
 * @summary : {filter} creates a new array with elements that satisfy a specified condition.
 * @param : (num)
 */
function filter1() {
  const evenNum = number.filter((num) => {
    return num % 2 === 0;
  });
  return evenNum;
}
function filter2() {
  const evenNum = number.filter((num) => {
    return num > 2;
  });
  return evenNum;
}
/**
 * @summary : {reduce} Accumulates array elements into a single value using a provided function.
 * @param : (total : 0,num : eachNumber)
 */
function reduce1() {
  const sum = number.reduce((total, num) => {
    return total + num;
  }, 0);
  return sum;
}
/**
 * @summary : {forEach} Itreates through array  elements and applies a function without creating a new array.
 */
//using forEach() find the sum of [1,2,3,4,5]
function foreach1() {
  let sum = 0;
  number.forEach((num) => (sum += num));
  return sum;
}
/**
 * @summary : {find} Retuens the first array element that satisfies a condition.
 */
function find1() {
  const foundNumber = number.find((num) => num > 2);
  return foundNumber;
}
/**
 * @summary : {some} Checks if at least one array element satisfies a condition.
 */
function some1(arr) {
  const hasOddNumber = arr.some((num) => num % 2 === 0);
  return hasOddNumber;
}
/**
 * @summary : {every} Checks if all array element satisfies a condition.
 */
function every1() {
  const allNumsGreaterThen0 = number.every((num) => {
    return num > 0;
  });
  return allNumsGreaterThen0;
}
function every2(optin) {
  const allNumsGreaterThen = number.every((num) => {
    return num > optin;
  });
  return allNumsGreaterThen;
}
module.exports = {
  map1,
  filter1,
  filter2,
  reduce1,
  foreach1,
  find1,
  some1,
  every1,
  every2,
};
