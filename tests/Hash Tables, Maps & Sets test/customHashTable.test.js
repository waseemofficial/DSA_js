const HashTable = require("../../DSA_70/Hash Tables, Maps & Sets/customHashTable");
describe("Custom Hash Table", () => {
  let hashTable;
  beforeEach(() => {
    hashTable = new HashTable();
  });
  test("Set and get a key-value pair", () => {
    hashTable.set("firstName", "john");
    expect(hashTable.get("firstName")).toBe("john");
  });
  test("Set and get multiple key-value pair", () => {
    hashTable.set("firstName", "John");
    hashTable.set("lastName", "Smith");
    hashTable.set("age", 30);
    expect(hashTable.get("firstName")).toBe("John");
    expect(hashTable.get("age")).toBe(30);
    expect(hashTable.get("lastName")).toBe("Smith");
  });
  test("set and delete a name", () => {
    hashTable.set("age", 30);

    expect(hashTable.get("age")).toBe(30);
    hashTable.remove("age");
    //! expect(hashTable.get("age")).toBe(undefined);
    expect(hashTable.get("age")).toBeUndefined();
  });
  test("set and test has method", () => {
    hashTable.set("age", 30);

    expect(hashTable.has("age")).toBe(true);
    expect(hashTable.has("firstName")).toBe(false);
  });
  test("test clear method", () => {
    hashTable.set("firstName", "John");
    hashTable.set("lastName", "Smith");
    hashTable.set("age", 30);
    expect(hashTable.clear()).toBeUndefined();
    expect(hashTable.has("firstName")).toBeFalsy();
    expect(hashTable.has("lastName")).not.toBeTruthy();
    expect(hashTable.has("age")).toBe(false);
  });
  test("get all the values", () => {
    hashTable.set("firstName", "John");
    hashTable.set("lastName", "Smith");
    hashTable.set("age", 30);
    expect(hashTable.getValues()).toEqual(["John", "Smith", 30]);
  });
});
