const Stack = require("./stackImplementation");
function reverseStringStack(str) {
  const stack = new Stack();
  let reverseStr = "";
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  while (!stack.isEmpty()) {
    reverseStr += stack.pop();
  }
  return reverseStr;
}
module.exports = reverseStringStack;
