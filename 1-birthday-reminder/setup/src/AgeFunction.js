function AgeFunction(dateOfBirth) {
  var ms = Date.now() - new Date(dateOfBirth).getTime();
  var personAge = new Date(ms);
  return Math.abs(personAge.getUTCFullYear() - 1970);
}

export default AgeFunction;
