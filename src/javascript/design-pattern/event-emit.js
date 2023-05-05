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
        const listeners = this.events[eventName];
        if (listeners) {
            const index = listeners.indexOf(listener);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        }
    }
}