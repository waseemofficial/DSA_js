const anagramGroupingHash = require("../../DSA_70/Hash Tables, Maps & Sets/anagramGroupingHash");
test("Anagram Grouping using Custom Hashmap", () => {
  //   const result = anagramGroupingHash([
  //     "act",
  //     "cat",
  //     "silent",
  //     "listen",
  //     "tac",
  //     "hello",
  //     "foo",
  //     "bar",
  //   ]);
  //   console.log(result);
  expect(
    anagramGroupingHash([
      "act",
      "cat",
      "silent",
      "listen",
      "tac",
      "hello",
      "foo",
      "bar",
    ])
  ).toEqual([
    ["act", "cat", "tac"],
    ["silent", "listen"],
    ["hello"],
    ["foo"],
    ["bar"],
  ]);
});
