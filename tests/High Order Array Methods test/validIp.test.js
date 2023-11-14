const validIp = require("../../DSA_70/High Order Array Methods/validIp");
test("check the validity of the IPv4 address", () => {
  expect(validIp("192.168.1.1")).toBe(true);
  expect(validIp("1.2.3.4")).toBe(true);
  expect(validIp("1.2.3")).toBe(false);
  expect(validIp("192.456.78.91")).toBe(false);
  expect(validIp("123.020.063.089")).toBe(false);
});
