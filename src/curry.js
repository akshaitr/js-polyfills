function curry(fn) {
    return function curried(...args) {
        if(args.length >= fn.length) {
            return fn(...args);
        } else {
            return function (...newArgs) {
                return curried(...args, ...newArgs);
            }
        }
    }
}

export default curry;
