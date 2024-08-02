function call(context = {}, ...args) {
  if (typeof this !== "function") {
    throw new TypeError(this + "is not callable");
  }
  context.func = this;
  context.func(...args);
}

export default call;
