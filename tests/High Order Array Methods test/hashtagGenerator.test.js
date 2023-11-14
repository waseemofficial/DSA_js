const {
  hashtagGenerator,
  hashtagGenerator1,
} = require("../../DSA_70/High Order Array Methods/hashtagGenerator");
test("generate a hashtag", () => {
  expect(hashtagGenerator("")).toBe(false);
  expect(hashtagGenerator("hello world")).toBe("#HelloWorld");
  expect(hashtagGenerator("hello there thanks for trying my kata")).toBe(
    "#HelloThereThanksForTryingMyKata"
  );
  expect(hashtagGenerator(" hello   world   ")).toBe("#HelloWorld");
  expect(
    hashtagGenerator(
      "This is very very very very very  very very very very very very very very very very    very very\
       long input that should return false hashtag because it exceeds the 140 limit of the caharacters"
    )
  ).toBe(false);
});
//second method
test("generate a hashtag", () => {
  expect(hashtagGenerator1("")).toBe(false);
  expect(hashtagGenerator1("hello world")).toBe("#HelloWorld");
  expect(hashtagGenerator1("hello there thanks for trying my kata")).toBe(
    "#HelloThereThanksForTryingMyKata"
  );
  expect(hashtagGenerator1(" hello   world   ")).toBe("#HelloWorld");
  expect(
    hashtagGenerator1(
      "This is very very very very very  very very very very very very very very very very    very very\
         long input that should return false hashtag because it exceeds the 140 limit of the caharacters"
    )
  ).toBe(false);
});
