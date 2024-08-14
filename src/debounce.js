function debounce(callback, delay) {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

export default debounce;
