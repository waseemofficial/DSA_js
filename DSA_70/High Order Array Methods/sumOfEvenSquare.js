function sumOfEvenSquare(number) {
  const filter1 = number.filter((num) => {
    return num % 2 == 0;
  });
  const square = filter1.map((num) => {
    return num ** 2;
  });
  const sum1 = square.reduce((sum, num) => {
    return sum + num;
  }, 0);
  return sum1;
}
module.exports = sumOfEvenSquare;
