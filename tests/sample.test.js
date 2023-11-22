function compileError() {
  throw new Error("you are using this wrong");
}
describe("check throw Error", () => {
  it("compile Error", () => {
    expect(() => compileError()).toThrow(Error);
    expect(() => compileError()).toThrow("you are using this wrong");
  });
});
