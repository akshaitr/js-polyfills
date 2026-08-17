function map(callback, thisArg) {
    // 1. Ensure 'this' is defined
    if (this == null) {
        throw new TypeError("Array.prototype.myMap called on null or undefined");
    }

    // 2. Validate callback is a function
    if (typeof callback !== "function") {
        throw new TypeError(`${callback} is not a function`);
    }

    const O = Object(this);
    const len = O.length >>> 0; // Convert length to a 32-bit unsigned integer
    const results = new Array(len);

    for(let i = 0; i < len; i++) {
        // Skip unassigned indexes (sparse arrays)
        if (i in O) {
            results[i] = callback.call(thisArg, O[i], i, O);
        }
    }

    return results;
}
