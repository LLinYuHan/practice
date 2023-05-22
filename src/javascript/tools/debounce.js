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

// 最后一次必须执行的 throttle
function throttle(fn, delay) {
    let timer;
    let lastExecutedTime;
    let shouldExecute = false;

    return function () {
        const now = Date.now();
        if (!lastExecutedTime || (now - lastExecutedTime >= delay)) {
            // 如果上一次执行时间距离现在超过了 delay，即立即执行
            clearTimeout(timer);
            fn.apply(this, arguments);
            lastExecutedTime = now;
            shouldExecute = false;
        }
        else {
            // 否则等待 delay 时间后执行
            if (!shouldExecute) {
                shouldExecute = true;
                timer = setTimeout(() => {
                    if (shouldExecute) {
                        fn.apply(this, arguments);
                        lastExecutedTime = Date.now();
                        shouldExecute = false;
                    }
                }, delay);
            }
        }
    }
}