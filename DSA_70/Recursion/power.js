function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  return base * power(base, exponent - 1);
}
const power1 = (base, exponent) =>
  exponent === 0 ? 1 : base * power(base, exponent - 1);
module.exports = { power, power1 };
