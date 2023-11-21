function phoneNumber(num) {
  const directory = new Map();
  for (const entry of num) {
    const [name, num] = entry.split(":");
    directory.set(name, num);
  }
  return directory;
}
module.exports = phoneNumber;
