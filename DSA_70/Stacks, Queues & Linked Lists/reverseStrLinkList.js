const { LinkedList } = require("./linkList");
function reverseStrLinkList(str) {
  const link = new LinkedList();
  for (let i = str.length - 1; i >= 0; i--) {
    link.add(str[i]);
  }
  let reverseStr = "";
  let current = link.head;
  while (current !== null) {
    reverseStr += current.data;
    current = current.next;
  }
  return reverseStr;
}
module.exports = reverseStrLinkList;
