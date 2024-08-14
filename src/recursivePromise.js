function recursivePromise(promiseArray) {
  if (promiseArray.length === 0) {
    return;
  }
  const currentPromise = promiseArray.shift();
  currentPromise
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw new Error("Error caught", error);
    });
  recursivePromise(promiseArray);
}
