function curry(fn) {
    return function curried(...args) {
        if(args.length >= fn.length) {
            // If enough arguments have been passed, call the function
            return fn(...args);
        } else {
            // Otherwise, return a function that collects more arguments
            return function (...newArgs) {
                return curried(...args, ...newArgs);
            }
        }
    }
}

export default curry;
