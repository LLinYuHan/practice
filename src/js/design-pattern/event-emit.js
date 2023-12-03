/**
 * @file event-emit 发布订阅模式
 * @author linyuhan
 */

class EventEmit {
    constructor() {
        this.events = {};
    }

    // 监听
    on(eventName, listener) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(listener);
    }

    // 发布
    emit(eventName, ...args) {
        const listeners = this.events[eventName];
        if (listeners) {
            listeners.forEach(listener => listener(...args));
        }
    }

    // 关闭监听
    off(eventName, listener) {
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter(item => item !== listener);
        }
    }

    // 监听一次
    once(eventName, listener) {
        const onceListener = (...args) => {
            listener(...args);
            this.off(eventName, onceListener);
        };
        this.on(eventName, onceListener);
    }
}