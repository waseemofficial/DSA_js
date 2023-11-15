function fibonacci(index) {
  if (index < 2) {
    return index;
  }
  return fibonacci(index - 1) + fibonacci(index - 2);
}
const fibonacci1 = (num) =>
  num < 2 ? num : fibonacci(num - 1) + fibonacci(num - 2);
module.exports = { fibonacci, fibonacci1 };
