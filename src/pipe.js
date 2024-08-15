function pipe(...funcs) {
  return function (init) {
    funcs.reduce((args, currFunc) => {
      return currFunc(args);
    }, init);
  };
}

export default pipe;
