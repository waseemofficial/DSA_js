function formatPhoneNum(num) {
  const areaCode = num.slice(0, 3).join("");
  const prefix = num.slice(3, 6).join("");
  const lineNumber = num.slice(6).join("");
  return `(${areaCode}) ${prefix}-${lineNumber}`;
}
//second method
function formatPhoneNum1(num) {
  const formatted = num.join("");

  return `(${formatted.substring(0, 3)}) ${formatted.substring(
    3,
    6
  )}-${formatted.substring(6)}`;
}
//third method
const formatPhoneNum2 = (num) =>
  `(${num.slice(0, 3).join("")}) ${num.slice(3, 6).join("")}-${num
    .slice(6)
    .join("")}`;

module.exports = { formatPhoneNum, formatPhoneNum1, formatPhoneNum2 };
