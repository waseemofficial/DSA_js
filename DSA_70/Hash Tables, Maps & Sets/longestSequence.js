function longestSequence(nums) {
  const numSet = new Set(nums);
  let longestSeq = 0;
  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currntSeq = 1;
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currntSeq++;
      }
      longestSeq = Math.max(longestSeq, currntSeq);
    }
  }
  return longestSeq;
}
module.exports = longestSequence;
