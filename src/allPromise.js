function allPromise(promiseArray) {
    return new Promise((resolve, reject) => {
        // Guard clause for empty arrays
        if(!Array.isArray(promiseArray) || promiseArray.length === 0) {
            resolve([]);
            return;
        }

        let results = [];
        let pending = promiseArray.length;

        promiseArray.forEach((promise, index) => {
            // Wrap in Promise.resolve to handle plain non-promise values
            return Promise.resolve(promise)
                .then((res) => {
                    results[index] = res; // Preserve original order
                    pending--;

                    if(pending === 0) {
                        resolve(results); // Resolve once all fulfill
                    }
                })
                .catch(reject) // Short-circuit on first rejection
        })
    });
}
