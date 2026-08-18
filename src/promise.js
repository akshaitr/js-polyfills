function MyPromise(executor) {
  let state = 'pending';
  let value;
  let handlers = [];

  function resolve(val) {
    if (state !== 'pending') return;
    state = 'fulfilled';
    value = val;
    execute();
  }

  function reject(err) {
    if (state !== 'pending') return;
    state = 'rejected';
    value = err;
    execute();
  }

  function execute() {
    if (state === 'pending') return;
    // Guarantee asynchronous execution via microtask
    queueMicrotask(() => {
      handlers.forEach((h) => {
        const cb = state === 'fulfilled' ? h.onFulfilled : h.onRejected;
        if (!cb) {
          (state === 'fulfilled' ? h.resolve : h.reject)(value);
          return;
        }
        try {
          const res = cb(value);
          h.resolve(res);
        } catch (err) {
          h.reject(err);
        }
      });
      handlers = [];
    });
  }

  this.then = function (onFulfilled, onRejected) {
    return new MyPromise((res, rej) => {
      handlers.push({ onFulfilled, onRejected, resolve: res, reject: rej });
      execute();
    });
  };

  this.catch = function (onRejected) {
    return this.then(null, onRejected);
  };

  try {
    executor(resolve, reject);
  } catch (err) {
    reject(err);
  }
}
