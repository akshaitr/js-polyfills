function filter(callback) {
  if (!Array.isArray(this)) {
    return new TypeError("filter is not a function on the given object");
  }
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
