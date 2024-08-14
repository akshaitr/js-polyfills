function throttle(callback, delay) {
  let last = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - last < delay) {
      return;
    }
    last = now;
    return callback(...args);
  };
}

export default throttle;
