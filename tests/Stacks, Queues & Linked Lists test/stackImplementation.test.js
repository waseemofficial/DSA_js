const Stack = require("../../DSA_70/Stacks, Queues & Linked Lists/stackImplementation");
describe("test the functionality of stack methods", () => {
  const stack = new Stack();
  it("test ", () => {
    expect(stack.push(1)).toBeTruthy();
    expect(stack.push(2)).toBeTruthy();
    expect(stack.isFull()).toBeFalsy();
    expect(stack).toMatchObject({ stack: [1, 2] });
    expect(stack).toMatchObject({ top: 1 });
    expect(stack.pop()).toBe(2);
    stack.push(3);
    stack.push(4);
    stack.pop();
    expect(stack).toMatchObject({ stack: [1, 3], top: 1 });
    expect(stack.peek()).toBe(3);
    stack.pop();
    expect(stack).toMatchObject({ stack: [1], top: 0 });
    stack.pop();
    //console.log(stack.pop());
    expect(stack.isEmpty()).toBeTruthy();
    expect(stack).toMatchObject({ stack: [], top: -1 });

    //console.log(stack.pop());
    //console.log(stack);
  });
});
