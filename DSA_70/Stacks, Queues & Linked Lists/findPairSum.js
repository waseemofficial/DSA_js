const { DoublyLinkList } = require("./doublyLinkList");
function findPairSum(nums, targetSum) {
  // inetialise the Doubly Link List
  const seen = new DoublyLinkList();
  for (const num of nums) {
    const difference = targetSum - num;
    if (seen.contains(difference)) {
      return [difference, num];
    }
    seen.append(num);
  }
  return null;
}
module.exports = findPairSum;
