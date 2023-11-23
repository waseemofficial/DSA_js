const Queue = require("./queueImplementation");
const Stack = require("./stackImplementation");
function palindromQueueStack(str) {
  const charQueue = new Queue();
  const charStack = new Stack();
  let formatedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  for (let i = 0; i < formatedStr.length; i++) {
    const char = formatedStr.charAt(i);
    charQueue.enqueue(char);
    charStack.push(char);
  }
  while (!charQueue.isEmpty()) {
    if (charQueue.dequeue() !== charStack.pop()) {
      return false;
    }
  }
  return true;
}
module.exports = palindromQueueStack;
