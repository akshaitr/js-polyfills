function promise(executor) {
  let isFullfilled = false;
  let isRejected = false;
  let isCalled = false;

  let value;
  let error;
  let onResolve;
  let onReject;

  function resolve(val) {
    isFullfilled = true;
    value = val;
    if (typeof onResolve === "function" && !isCalled) {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(err) {
    isRejected = true;
    error = err;
    if (typeof onReject === "function" && !isCalled) {
      onReject(err);
      isCalled = false;
    }
  }

  this.then = function (thenHandler) {
    onResolve = thenHandler;
    if (!isCalled && isFullfilled) {
      onResolve(value);
      isCalled = true;
    }
    return this;
  };

  this.catch = function (catchHandler) {
    onReject = catchHandler;
    if (!isCalled && isRejected) {
      onReject(error);
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
