function validateEmail(email) {
  const emilRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return emilRegex.test(email);
}
//second method
function validateEmail1(email) {
  if (email.indexOf("@") === -1) {
    return false;
  }
  const [local, domain] = email.split("@");
  if (local.length === 0 || domain.length < 3) {
    return false;
  }
  const domainExt = domain.split(".");
  if (domainExt.length < 2 || domainExt[1] < 2) {
    return false;
  }
  return true;
}

module.exports = { validateEmail, validateEmail1 };
