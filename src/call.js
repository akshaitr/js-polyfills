function call(context, ...args) {
    // 1. Ensure 'this' is a callable function
    if(typeof this !== "function") {
        throw new TypeError(`${this} is not callable`)
    }

    // 2. Handle null/undefined context (defaults to global object) 
    // and wrap primitives (e.g., string/number) into objects
    context = context != null ? Object(context) : globalThis;

    // 3. Create a unique property symbol to prevent overwriting existing keys
    const fnSymbol = Symbol("fn");

    // 4. Attach the function, execute it with arguments, and clean up
    context[fnSymbol] = this;
    const result = context[fnSymbol](...args);
    delete context[fnSymbol];

    return result;
}
