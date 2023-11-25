const {
  DoublyLinkList,
} = require("../../DSA_70/Stacks, Queues & Linked Lists/doublyLinkList");
const list = new DoublyLinkList();
list.append(100);
list.append(200);
list.append(300);
list.prepend(90);
test("test for doubly Link List", () => {
  expect(list.get(1)).toMatchObject({ data: 100 });
});

test("test get function in doubly Link List", () => {
  expect(list.get(2).data).toBe(200);
});
test("test insertAt in doubly Link List", () => {
  expect(list.length).toBe(4);
  list.insertAt(3, "a");
  expect(list.length).toBe(5);
});
test("test append in doubly Link List", () => {
  expect(list.length).toBe(5);
  expect(list.tail).toMatchObject({ data: 300 });
  list.append("b");
  expect(list.length).toBe(6);
  //console.log(list);
  expect(list.tail).toMatchObject({ data: "b" });
});
/**test("test prepend in doubly Link List", () => {
  expect(list.head.data).toBe(90);
  // console.log(list);
  expect(list.head).toMatchObject({ data: 90 });
  // list.prepend("head");
  expect(list.head).toBe(6);
  console.log(list);
  expect(list.head).toMatchObject({ data: "b" });
});
*/
test("test remove in doubly Link List", () => {
  //console.log(list);
  expect(list.length).toBe(6);
  list.remove(1);
  list.remove(2);
  list.remove(5);
  //console.log(list);
  expect(list.length).toBe(4);

  // expect(list.head).toMatchObject({
  //   head: {
  //     data: 90,
  //   },
  //   tail: {
  //     data: "b",
  //   },
  //   length: 5,
  // });
  // // list.prepend("head");
  //expect(list.head).toBe(6);
  // console.log(list);
  // expect(list.head).toMatchObject({ data: "b" });
});
