// https://github.com/YvetteLau/Blog/issues/2
// 工业聚：https://juejin.cn/post/6903725134977171463

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
const STATUS = [PENDING, FULFILLED, REJECTED] as const;

function resolvePromise(promise2, x, resolve, reject) {
    // 自己等待自己完成是错误的实现，用一个类型错误，结束掉 promise  Promise/A+ 2.3.1
    if (promise2 === x) {
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'));
    }
    // Promise/A+ 2.3.3.3.3 只能调用一次
    let called;
    // 后续的条件要严格判断 保证代码能和别的库一起使用
    if ((typeof x === 'object' && x) || typeof x === 'function') {
        try {
            // 为了判断 resolve 过的就不用再 reject 了（比如 reject 和 resolve 同时调用的时候）  Promise/A+ 2.3.3.1
            let { then } = x;
            if (typeof then === 'function') {
                // 不要写成 x.then，直接 then.call 就可以了 因为 x.then 会再次取值，Object.defineProperty  Promise/A+ 2.3.3.3
                then.call(
                    x,
                    (y) => {
                        // 根据 promise 的状态决定是成功还是失败
                        if (called) return;
                        called = true;
                        // 递归解析的过程（因为可能 promise 中还有 promise） Promise/A+ 2.3.3.3.1
                        resolvePromise(promise2, y, resolve, reject);
                    },
                    (r) => {
                        // 只要失败就失败 Promise/A+ 2.3.3.3.2
                        if (called) return;
                        called = true;
                        reject(r);
                    }
                );
            } else {
                // 如果 x.then 是个普通值就直接返回 resolve 作为结果  Promise/A+ 2.3.3.4
                resolve(x);
            }
        } catch (e) {
            // Promise/A+ 2.3.3.2
            if (called) return;
            called = true;
            reject(e);
        }
    } else {
        // 如果 x 是个普通值就直接返回 resolve 作为结果  Promise/A+ 2.3.4
        resolve(x);
    }
}

class MyPromise {
    status: typeof STATUS[number] = 'pending';

    value: unknown;

    reason: unknown;

    fulfilledCallbacks = [];

    rejectedCallbacks = [];

    constructor(executor: (resolve: (val) => unknown, reject: (err) => unknown) => unknown) {
        const resolve = (value) => {
            if (this.status !== PENDING) return;
            this.status = FULFILLED;
            this.value = value;
            this.fulfilledCallbacks.forEach((callback) => callback());
        };

        const reject = (reason) => {
            if (this.status !== PENDING) return;
            this.status = REJECTED;
            this.reason = reason;
            this.rejectedCallbacks.forEach((callback) => callback());
        };
        try {
            executor(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }

    then(onFulfilled, onRejected?) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
        onRejected =
            typeof onRejected === 'function'
                ? onRejected
                : (reason) => {
                      throw reason instanceof Error ? reason : new Error(reason);
                      // throw reason;
                  };

        const promise2 = new MyPromise((resolve, reject) => {
            if (this.status === PENDING) {
                this.fulfilledCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            const x = onFulfilled(this.value);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (err) {
                            reject(err);
                        }
                    });
                });
                this.rejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            const x = onRejected(this.reason);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (err) {
                            reject(err);
                        }
                    });
                });
            } else if (this.status === FULFILLED) {
                setTimeout(() => {
                    try {
                        // PromiseA+ 2.2.7.1
                        let x = onFulfilled(this.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        // PromiseA+ 2.2.7.2
                        reject(e);
                    }
                });
            } else if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            }
        });

        return promise2;
    }

    catch(onRejected) {
        return this.then(null, onRejected);
    }

    static resolve() {}

    static reject() {}
}

new MyPromise((resolve, reject) => {
    setTimeout(() => {
        console.log('timeout');
        resolve(111);
    }, 300);
})
    .then((value) => {
        console.log(value);
        return new MyPromise((resolve) => {
            setTimeout(() => resolve(222), 300);
        });
    })
    .then((value) => {
        console.log(value);
        return new MyPromise((resolve, reject) => {
            setTimeout(() => reject('error 403'), 300);
        });
    })
    .then((value) => {
        console.log(value);
        return new MyPromise((resolve, reject) => {
            setTimeout(() => resolve(333), 300);
        });
    })
    .then((value) => {
        console.log(value);
    })
    .catch((value) => {
        console.log('catch~~~~~~~~');
        // console.log(value);
        return new MyPromise((resolve, reject) => {
            setTimeout(() => resolve(444), 300);
        });
    })
    .then((value) => {
        console.log(value);
    });
