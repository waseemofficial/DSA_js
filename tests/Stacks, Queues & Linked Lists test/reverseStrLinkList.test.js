const reverseStrLinkList = require("../../DSA_70/Stacks, Queues & Linked Lists/reverseStrLinkList");
test("reverseStrLinkList", () => {
  expect(reverseStrLinkList("hello")).toBe("olleh");
  expect(reverseStrLinkList("JavaScript")).toBe("tpircSavaJ");
});
