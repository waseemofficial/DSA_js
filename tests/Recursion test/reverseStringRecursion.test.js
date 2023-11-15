const reverseStringRecursion = require("../../DSA_70/Recursion/reverseStringRecursion");
test("Reverse String Recursion.js", () => {
  expect(reverseStringRecursion("hello")).toBe("olleh");
  expect(reverseStringRecursion("Passport")).toBe("tropssaP");
  expect(reverseStringRecursion("https://onebitco.com/BTC_Faucet/")).toBe(
    "/tecuaF_CTB/moc.octibeno//:sptth"
  );
});
