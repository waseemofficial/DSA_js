function arraySum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + arraySum(arr.slice(1));
}
//const arraySum= (arr)=>(arr.length===0)?0:arr[0] + arraySum(arr.slice(1))
module.exports = arraySum;
