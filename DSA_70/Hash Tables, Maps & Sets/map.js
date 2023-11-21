const myFunction = () => {
  return "hi";
};
const myMap = new Map([
  ["name", "john"],
  [1, "number one"],
  [true, "really ture"],
  [null, "null"],
  [myFunction, "My Function"],
  [myObj, "my Object"],
]);
function map() {
  return;
}
module.exports = { map, myMap };
