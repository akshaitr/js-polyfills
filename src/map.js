function map(callback) {
  if (typeof callback !== "function") {
    return new TypeError("callback is not a function");
  }
  const mappedArray = [];
  for (let i = 0; i < this.length; i++) {
    mappedArray.push(callback(this[i], i, this));
  }
  return mappedArray;
}

export default map;
