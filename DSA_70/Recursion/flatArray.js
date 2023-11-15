function flatArray(arr) {
  let result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
module.exports = flatArray;
