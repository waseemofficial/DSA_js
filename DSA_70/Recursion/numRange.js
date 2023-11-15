function numRange(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  }
  const numbers = numRange(startNum, endNum - 1);
  numbers.push(endNum);
  return numbers;
}
module.exports = numRange;
