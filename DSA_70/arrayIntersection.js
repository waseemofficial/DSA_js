function arrayIntersection(arr1, arr2) {
  let commen = [];
  for (let i = 0; i <= arr1.length; i++) {
    //Math.min(arr1.length-1,arr2.length-1)
    if (arr2.includes(arr1[i]) && !commen.includes(arr1[i])) {
      commen.push(arr1[i]);
    }
  }
  return commen;
}
function arrayIntersection1(arr1, arr2) {
  let commen = [];
  let set1 = new Set(arr1);
  for (let num of arr2) {
    //Math.min(arr1.length-1,arr2.length-1)
    if (set1.has(num)) {
      commen.push(num);
    }
  }
  return commen;
}
module.exports = { arrayIntersection, arrayIntersection1 };
