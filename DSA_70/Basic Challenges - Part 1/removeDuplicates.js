// other methods
function removeDuplicates(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }

  return uniqueArr;
}
//second  method
function removeDuplicates1(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }

  return uniqueArr.join("");
}
//second method where even if a sentence is provided it removes duplicates
function removeDuplicates2(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== " ") {
      if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
        continue;
      }
    } else {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr.join("");
}
// remove duplicates using set()
function removeDuplicates3(arr) {
  return Array.from(new Set(arr));
}
module.exports = {
  removeDuplicates,
  removeDuplicates1,
  removeDuplicates2,
  removeDuplicates3,
};
