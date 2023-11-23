const Queue = require("../../DSA_70/Stacks, Queues & Linked Lists/queueImplementation");
describe("custom implementation of a QUEUE", () => {
  let queue;
  beforeEach(() => {
    queue = new Queue();
  });
  afterEach(() => {
    queue = null;
  });
  it("test enqueue method", () => {
    expect(queue.enqueue("a")).toBe(true);
    expect(queue).toMatchObject({
      maxSize: 100,
      queue: ["a"],
      head: 0,
      tail: 1,
    });
    expect(queue.isEmpty()).toBeFalsy();
    expect(queue.getLength()).toBe(1);
    expect(queue.peep()).toBe("a");
  });
});
