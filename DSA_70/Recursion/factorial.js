function factorial(num) {
  if (num === 0 || num === 1 || num === undefined) {
    return 1;
  }

  return num * factorial(num - 1);
}
module.exports = factorial;
