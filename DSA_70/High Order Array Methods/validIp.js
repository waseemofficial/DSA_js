function validIp(ip) {
  const octets = ip.split(".");
  if (octets.length !== 4) {
    return false;
  }

  return octets.every((oct) => {
    const num = parseInt(oct);

    return num >= 0 && num <= 255 && oct === num.toString();
  });
}
module.exports = validIp;
