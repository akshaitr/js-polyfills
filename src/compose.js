function compose(...funcs) {
  return function (init) {
    funcs.reduceRight((args, currFunc) => {
      return currFunc(args);
    }, init);
  };
}

export default compose;
