const {
  LinkedList,
} = require("../../DSA_70/Stacks, Queues & Linked Lists/linkList");
const findTheMiddle = require("../../DSA_70/Stacks, Queues & Linked Lists/findTheMiddle");
const link = new LinkedList();
link.add("a");
link.add("b");
link.add("c");
link.add("d");
link.add("e");

test("find the middle of a linked list using fast slow pointer methid", () => {
  expect(findTheMiddle(link)).toMatchObject({
    data: "c",
    next: { data: "d", next: { data: "e", next: null } },
  });
});
