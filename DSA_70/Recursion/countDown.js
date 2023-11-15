function countDown(num) {
  // Base Case
  if (num <= 0) {
    const a = "All Done";
    return a;
  }
  num--;
  console.log(num);
  countDown(num);
}
module.exports = countDown;
