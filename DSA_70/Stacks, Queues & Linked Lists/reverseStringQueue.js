const Queue = require("./queueImplementation");
function reverseStringQueue(str) {
  const queue = new Queue();
  for (let i = str.length - 1; i >= 0; i--) {
    queue.enqueue(str[i]);
  }
  let reverseStr = "";
  while (!queue.isEmpty()) {
    reverseStr += queue.dequeue();
  }
  return reverseStr;
}
module.exports = reverseStringQueue;
