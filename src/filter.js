function filter(callback, thisArg) {
    // 1. Ensure 'this' is defined
    if (this == null) {
        throw new TypeError("Array.prototype.myMap called on null or undefined");
    }

    // 2. Validate callback is a function
    if (typeof callback !== "function") {
        throw new TypeError(`${callback} is not a function`);
    }

    const O = Object(this);
    const len = O.length >>> 0;
    const results = []; // Start with a clean, dynamic array

    for(let i = 0; i < len; i++) {
        // Skip unassigned slots (sparse arrays) and check truthiness
        if (i in O) {
            const val = O[i];
            if(callback.call(thisArg, val, i, O)) {
                results.push(val); // Append matching elements sequentially
            }
        }
    }

    return results;
}
