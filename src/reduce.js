function reduce(callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError("callback is not a function");
  }

  // Check if initialValue argument was explicitly provided
  const hasInitialValue = arguments.length > 1;
  
  if(this.length === 0 && !hasInitialValue) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  // Set starting accumulator and loop index
  let accumulator = hasInitialValue ? initialValue : this[0];
  let startIndex = hasInitialValue ? 0 : 1;
  
  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  
  return accumulator;
}

export default reduce;
