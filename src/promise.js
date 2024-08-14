function promise(executor) {
  let isFullfilled = false;
  let isRejected = false;
  let isCalled = false;

  let value;
  let onResolve;
  let onReject;

  function resolve(val) {
    value = val;
    isFullfilled = true;
    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(val) {
    value = val;
    isRejected = true;
    if (typeof onReject === "function") {
      onReject(val);
      isCalled = false;
    }
  }

  this.then = function (callback) {
    onResolve(callback);
    if (isFullfilled && !isCalled) {
      onResolve(value);
      isCalled = true;
    }
    return this;
  };

  this.catch = function (callback) {
    onReject(callback);
    if (isRejected && !isCalled) {
      onReject(value);
      isCalled = true;
    }
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

export default promise;
