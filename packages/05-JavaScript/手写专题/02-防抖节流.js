/*
 * 防抖
 * */

// 简单版
function debounce(fn, time) {
    let timer = null;
    return (...args) => {
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
            timer = null;
        }, time);
    };
}

/*
 * 1. 支持立即执行和非立即执行
 * 2. 支持函数返回值
 * 3. 支持取消防抖
 * */
function debounce2(fn, time, immediate) {
    let timer = null;
    let result;

    function debounced(...args) {
        const context = this;
        if (immediate && !timer) result = fn.call(context, ...args);
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            if (!immediate) result = fn.call(context, ...args);
            timer = null;
        }, time);
        return result;
    }

    debounced.cancel = () => {
        clearTimeout(timer);
        timer = null;
    };

    return debounced;
}

function testDebounce() {
    function say(msg) {
        console.log(msg);
    }

    const debounceSay = debounce2(say, 1000, true);

    const timer = setInterval(() => {
        debounceSay(Date.now());
    }, 100);

    setTimeout(() => {
        clearTimeout(timer);
    }, 2000);
}

testDebounce();

/*
 * 节流
 * */
function throttle(fn, time) {
    let timer = null;
    let previous = 0;
    return function (...args) {
        const now = +Date.now();
        if (now - previous > time) {
            const context = this;
            previous = now;
            fn.call(context, ...args);
        }
    };
}

/*
 *  加强版节流：
 * 1.支持取消节流
 * 2.支持通过传入第三个参数，options.leading 来表示是否可以立即执行一次
 * 3. opitons.trailing 表示结束调用的时候是否还要执行一次，默认都是 true。
 * 注意设置的时候不能同时将 leading 或 trailing 设置为 false。
 * */
function throttle2(func, wait, options) {
    let timeout;
    let context;
    let args;
    let result;
    let previous = 0;
    if (!options) options = {};

    let later = function () {
        previous = options.leading === false ? 0 : new Date().getTime();
        timeout = null;
        func.apply(context, args);
        // eslint-disable-next-line no-multi-assign
        if (!timeout) context = args = null;
    };

    let throttled = function (...argument) {
        let now = new Date().getTime();
        if (!previous && options.leading === false) previous = now;
        let remaining = wait - (now - previous);
        context = this;
        args = argument;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
    };

    throttled.cancel = function () {
        clearTimeout(timeout);
        previous = 0;
        timeout = null;
    };
    return throttled;
}

function testThrottle() {
    console.log('test throttle');
    const throttled = throttle((msg) => {
        console.log(msg);
    }, 1000);
    setInterval(() => {
        throttled(Date.now());
    }, 200);
}

testThrottle();
