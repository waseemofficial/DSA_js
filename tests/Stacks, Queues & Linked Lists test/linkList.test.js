const {
  LinkedList,
} = require("../../DSA_70/Stacks, Queues & Linked Lists/linkList");
describe("test custom Linked List", () => {
  const list = new LinkedList();
  it("test printAll", () => {
    list.add("a");
    list.add("b");
    list.add("c");
    expect(list.get(2)).toBe("c");
    expect(list.get(1)).toBe("b");
    list.insertAt(1, 100);
    expect(list.get(1)).toBe(100);
    expect(list.get(2)).toBe("b");
    list.removeFrom(1);
    expect(list.get(1)).toBe("b");
    list.removeFrom(0);
    list.removeFrom(0);
    expect(list.get(0)).toBe("c");
    expect(list.printAll()).toBe();
  });

  it("test printAll", () => {
    list.add("a");
    list.add("b");
    list.add("c");
    expect(list.head.data).toBe("c");
    expect(list.get(1)).toBe("a");
    list.insertAt(1, 100);
    expect(list.get(1)).toBe(100);
    expect(list.tail.data).toBe("c");
    list.removeFrom(1);
    expect(list.get(1)).toBe("a");
    list.removeFrom(0);
    list.removeFrom(0);
    expect(list.get(0)).toBe("b");
    expect(list.printAll()).toBe();
  });
});
