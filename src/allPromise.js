function allPromise(promiseArray) {
  return new Promise((resolve, reject) => {
    const results = [];
    if (!promiseArray.length) {
      resolve(results);
      return;
    }
    let pending = promiseArray.length;
    promiseArray.forEach((promise, index) => {
      Promise.resolve(promise).then((res) => {
        results[index] = res;
        pending--;
        if (pending === 0) {
          resolve(results);
        }
      }, reject);
    });
  });
}

export default allPromise;
