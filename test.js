// 1. 固定形参数量时
function curry(fn) {
    let _args = [];
    function curriedFn(...args) {
        _args = args;
        // curriedFn累计的实参数量达到fn的形参数量时执行fn方法
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }

        // 未达到形参数量则将参数拼接继续调用curriedFn
        function nextFn(...args2) {
            _args = args.concat(args2);
            return curriedFn.apply(this, _args);
        }

        // 未传满形参个数时可通过toString调用fn进行计算
        nextFn.toString = () => fn.apply(this, _args);
        return nextFn;
    }

    return curriedFn;
}

function _sum(a, b, c) {
    return (a || 0) + (b || 0) + (c || 0);
}

const sum = curry(_sum);

console.log(+sum(1));
console.log(+sum(1)(2));
console.log(+sum(3)(2));
console.log(sum(1)(2)(3));
console.log(sum(4)(5)(6));

// 2. 柯里化sum方法
// function sum(...args) {
//     const _args = [...args];
//
//     function fn(...args) {
//         _args.push(...args);
//         return fn;
//     }
//
//     const _sum = (...args) => args.reduce((total, num) => total + num)
//
//     fn.toString = () => _sum(..._args)
//
//     return fn;
// }
//
// console.log(+sum(1));
// console.log(+sum(1)(2));
// console.log(+sum(1)(2)(3));

// 3. 通用封装
// function curry(fn) {
//     const _args = [];
//
//     function curriedFn(...args) {
//         _args.push(...args);
//         return curriedFn;
//     }
//
//     curriedFn.toString = () => fn(..._args);
//
//     return curriedFn;
// }
//
// function sum(...args) {
//     return args.reduce((total, num) => total + num);
// }
//
// console.log(+curry(sum)(1));
// console.log(+curry(sum)(1)(2));
// console.log(+curry(sum)(1)(2)(3));
