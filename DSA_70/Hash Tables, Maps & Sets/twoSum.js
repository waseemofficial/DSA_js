function twoSum(nums, target) {
  const numsSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numsSet.has(complement)) {
      return [nums.indexOf(complement), i];
    }
    numsSet.add(nums[i]);
  }
  return [];
}
module.exports = twoSum;
