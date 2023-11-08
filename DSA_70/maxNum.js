function findMaxNum1(arr) {
  return Math.max(...arr);
}

function findMaxNum2(arr) {
  let max = arr[0];
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
module.exports = { findMaxNum2, findMaxNum1 };
