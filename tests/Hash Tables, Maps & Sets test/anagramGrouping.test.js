const anagramGrouping = require("../../DSA_70/Hash Tables, Maps & Sets/anagramGrouping");
test("group the anagram", () => {
  expect(
    anagramGrouping(["cinema", "iceman", "cat", "act", "dog", "god", "tac"])
  ).toEqual([
    ["cinema", "iceman"],
    ["cat", "act", "tac"],
    ["dog", "god"],
  ]);
  expect(
    anagramGrouping(["listen", "silent", "enlist", "hello", "world"])
  ).toEqual([["listen", "silent", "enlist"], ["hello"], ["world"]]);
});
