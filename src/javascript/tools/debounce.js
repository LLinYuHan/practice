/**
 * @file debounce 防抖函数 / throttle 节流函数
 * @author linyuhan
 */

function debounce(fn, delay) {
    let timeoutId;
    return function () {
        const self = this;
        const args = arguments;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(self, args), delay);
    }
}

function throttle(fn, delay) {
    let timerId;
    return function () {
        const self = this;
        const args = arguments;
        if (!timerId) {
            timerId = setTimeout(() => {
                fn.apply(self, args);
                timerId = null;
            }, delay);
        }
    }
}