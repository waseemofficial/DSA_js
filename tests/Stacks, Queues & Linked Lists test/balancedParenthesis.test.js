const balancedParenthesis = require("../../DSA_70/Stacks, Queues & Linked Lists/balancedParenthesis");
test("test for even/balanced number of parenthesis", () => {
  expect(balancedParenthesis("(")).toBeFalsy();
  expect(balancedParenthesis("(()())")).toBe(true);
  expect(balancedParenthesis("((())")).toBeFalsy();
  expect(balancedParenthesis("()(())()")).toBeTruthy();
  expect(balancedParenthesis(")(")).toBeFalsy();
  expect(balancedParenthesis("()(")).toBeFalsy();
  expect(balancedParenthesis("))")).toBeFalsy();
});
