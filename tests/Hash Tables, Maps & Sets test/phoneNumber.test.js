const phoneNumber = require("../../DSA_70/Hash Tables, Maps & Sets/phoneNumber");
test("Phone number Directory", () => {
  expect(
    phoneNumber(["john:123-456-789", "jane:987-654-3210"]).get("john")
  ).toBe("123-456-789");
});
