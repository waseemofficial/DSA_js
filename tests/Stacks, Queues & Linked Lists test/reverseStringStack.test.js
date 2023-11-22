const reverseStringStack = require("../../DSA_70/Stacks, Queues & Linked Lists/reverseStringStack");
test("reverse a string using custom stack implimentation", () => {
  expect(reverseStringStack("hello")).toBe("olleh");
  expect(reverseStringStack("123456")).toBe("654321");
  expect(reverseStringStack("JavaScript")).toBe("tpircSavaJ");
});
