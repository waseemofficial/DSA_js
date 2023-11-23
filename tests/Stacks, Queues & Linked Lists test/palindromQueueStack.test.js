const palindromQueueStack = require("../../DSA_70/Stacks, Queues & Linked Lists/palindromQueueStack");
describe("test for palindrom using custom Queue and Stack", () => {
  it("", () => {
    expect(palindromQueueStack("A man, a  plan, a canal: Panama")).toBeTruthy();
    expect(palindromQueueStack("racecar")).toBeTruthy();
    expect(palindromQueueStack("hello")).toBeFalsy();
    expect(palindromQueueStack("12321")).toBeTruthy();
  });
});
