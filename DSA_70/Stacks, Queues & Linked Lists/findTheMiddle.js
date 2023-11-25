function findTheMiddle(link) {
  let slow = link.head;
  let fast = link.head;
  let previous = null;
  while ((fast !== null) & (fast.next !== null)) {
    fast = fast.next.next;
    previous = slow;
    slow = slow.next;
  }
  if (fast === null) {
    return previous.next;
  } else {
    return slow;
  }
}
module.exports = findTheMiddle;
