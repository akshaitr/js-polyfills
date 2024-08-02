function memoize(func, context) {
  let responseCache = {};
  return function (...args) {
    let argsString = JSON.stringify(args);
    if (!responseCache[argsString]) {
      responseCache[argsString] = func.call(context || this, args);
    }
    return responseCache[argsString];
  };
}

export default memoize;
