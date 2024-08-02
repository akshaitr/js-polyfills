function bind(context = {}, ...args) {
  if (typeof this !== "function") {
    throw new TypeError(this + "cannot be bound");
  }
  context.func = this;
  return function (...newArgs) {
    return context.func(...args, ...newArgs);
  };
}

export default bind;
