function filter(callback) {
  if (typeof callback !== "function") {
    return new TypeError("callback is not a function");
  }
  const filteredArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      filteredArray.push(this[i]);
    }
  }
  return filteredArray;
}

export default filter;
