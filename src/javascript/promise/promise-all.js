/**
 * @file promise all 方法
 * @author linyuhan
 */

function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completedCount = promises.length;

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(result => {
                    results[index] = result;
                    completedCount--;

                    if (completedCount === 0) {
                        resolve(results);
                    }
                })
                .catch(error => {
                    reject(error);
                })
        });
    });
}
