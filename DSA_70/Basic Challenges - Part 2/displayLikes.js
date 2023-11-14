function displayLikes(names) {
  const lengths = names.length;
  if (lengths === 0) {
    return `no one likes this`;
  } else if (lengths === 1) {
    return `${names[0]} likes this`;
  } else if (lengths === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (lengths === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${lengths - 2} others like this`;
  }
}
module.exports = displayLikes;
