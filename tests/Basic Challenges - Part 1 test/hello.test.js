const helloworld = require("../../DSA_70/first");

test("test  hello world!", () => {
  const result = helloworld();
  expect(result).toBe("Hello World!");
});
