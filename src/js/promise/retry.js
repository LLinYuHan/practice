/**
 * @file retry 重试请求
 * @author linyuhan
 */

function retryRequest(url, options, times = 3, delay = 1000) {
    return new Promise((resolve, reject) => {
        const tryRequest = attempt => {
            fetch(url, options)
                .then(res => {
                    if (res.ok) {
                        resolve(res);
                    }
                    else {
                        throw new Error(`Request failed with status ${res.status}`);
                    }
                })
                .catch(error => {
                    if (attempt < times) {
                        setTimeout(() => tryRequest(attempt + 1), delay);
                    }
                    else {
                        reject(error);
                    }
                });
        };
        tryRequest(0);
    });
}

// 通用重试方法
function retry(fn, times = 3, delay = 1000) {
    return new Promise((resolve, reject) => {
        fn().then(res => {
            resolve(res);
        })
        .catch (error => {
            if (times > 0) {
                setTimeout(() => {
                    retry(fn, times - 1, delay);
                }, delay);
            }
            else {
                reject(error);
            }
        });
    });
}

function getPromise() {
    const cnt = Math.random();
    return new Promise((resolve, reject) => {
        return cnt > 0.95 ? resolve(cnt) : reject(cnt);
    });
}