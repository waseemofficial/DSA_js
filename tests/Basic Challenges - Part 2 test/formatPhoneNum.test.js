const {
  formatPhoneNum,
  formatPhoneNum1,
  formatPhoneNum2,
} = require("../../DSA_70/Basic Challenges - Part 2/formatPhoneNum");
test("format phone number", () => {
  expect(formatPhoneNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe("(123) 456-7890");
  expect(formatPhoneNum([5, 0, 2, 4, 8, 1, 9, 6, 3, 7])).toBe("(502) 481-9637");
  expect(formatPhoneNum([0, 8, 0, 4, 5, 8, 2, 2, 9, 0])).toBe("(080) 458-2290");
  expect(formatPhoneNum([8, 0, 0, 4, 5, 6, 7, 8, 9, 0])).toBe("(800) 456-7890");
});
//second method
test("format phone number", () => {
  expect(formatPhoneNum1([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe(
    "(123) 456-7890"
  );
  expect(formatPhoneNum([5, 0, 2, 4, 8, 1, 9, 6, 3, 7])).toBe("(502) 481-9637");
  expect(formatPhoneNum([0, 8, 0, 4, 5, 8, 2, 2, 9, 0])).toBe("(080) 458-2290");
  expect(formatPhoneNum([8, 0, 0, 4, 5, 6, 7, 8, 9, 0])).toBe("(800) 456-7890");
});
//third method
test("format phone number", () => {
  expect(formatPhoneNum2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe(
    "(123) 456-7890"
  );
  expect(formatPhoneNum([5, 0, 2, 4, 8, 1, 9, 6, 3, 7])).toBe("(502) 481-9637");
  expect(formatPhoneNum([0, 8, 0, 4, 5, 8, 2, 2, 9, 0])).toBe("(080) 458-2290");
  expect(formatPhoneNum([8, 0, 0, 4, 5, 6, 7, 8, 9, 0])).toBe("(800) 456-7890");
});
