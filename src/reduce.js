function reduce(callback, initialValue) {
  if (!Array.isArray(this)) {
    return new TypeError("reduce is not a function on the given object");
  }
  if (typeof callback !== "function") {
    return new TypeError("callback is not a function");
  }
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator
      ? callback(accumulator, this[i], i, this)
      : this[i];
  }
  return accumulator;
}

export default reduce;
