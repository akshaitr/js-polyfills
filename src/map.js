function map(callback) {
  if (!Array.isArray(this)) {
    return new TypeError(`map is not a function on the given object`);
  }
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
