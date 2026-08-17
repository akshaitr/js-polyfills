function bind(context, ...boundArgs) {
    // 1. Ensure 'this' is a callable function
    if(typeof this !== "function") {
        throw new TypeError(`${this} is not callable`)
    }

    const targetFunction = this;

    // 2. return a new wrapper function
    return function BoundFunction(...callArgs) {
        // Handle when called as a constructor using `new`
        if(new.target) {
            return new targetFunction(...boundArgs, ...callArgs);
        }

        // Standard function call using .apply()
        return targetFunction.apply(context, [...boundArgs, ...callArgs]);
    }
}
