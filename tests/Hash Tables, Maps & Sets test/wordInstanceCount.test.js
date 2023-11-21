const wordInstanceCount = require("../../DSA_70/Hash Tables, Maps & Sets/wordInstanceCount");
test("count the number of times a word appears in the given string", () => {
  //wordInstanceCount('The Quick brown fox jumps over the lazy dog.' , 'the')
  expect(
    wordInstanceCount("The Quick brown fox jumps over the lazy dog.", "the")
  ).toBe(2);
  expect(
    wordInstanceCount(
      "To stop checking for updates, run 'clink set clink.autoupdate off'",
      "clink"
    )
  ).toBe(2);
  expect(
    wordInstanceCount(
      "To stop checking for updates, run 'clink set clink.autoupdate off ' off ",
      "off"
    )
  ).toBe(2);
  expect(
    wordInstanceCount("very very very very very very very very ", "very")
  ).toBe(8);
});
