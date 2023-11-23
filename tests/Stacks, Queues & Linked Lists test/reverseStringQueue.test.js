const reverseStringQueue = require("../../DSA_70/Stacks, Queues & Linked Lists/reverseStringQueue");
test("reverse the string using custom queue", () => {
  expect(reverseStringQueue("hello")).toBe("olleh");
  expect(reverseStringQueue("JavaScript")).toBe("tpircSavaJ");
  expect(reverseStringQueue("Python")).toBe("nohtyP");
});
