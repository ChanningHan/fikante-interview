/*
 *实现pow(x,n)，即计算 x 的 n 次幂函数（即，xn）。不得使用库函数，同时不需要考虑大数问题。

示例 1：

输入：x = 2.00000, n = 10
输出：1024.00000
示例 2：

输入：x = 2.10000, n = 3
输出：9.26100
示例 3：

输入：x = 2.00000, n = -2
输出：0.25000
解释：2-2 = 1/22 = 1/4 = 0.25


提示：

-100.0 <x< 100.0
-231<= n <=231-1
-104<= xn<= 104

 *
 * */

function test(func) {
    const testArr = [
        {
            input: { x: 2.0, n: 10 },
            output: 1024.0,
        },
        {
            input: { x: 2.1, n: 3 },
            output: 9.261,
        },
        {
            input: { x: 2.0, n: -2 },
            output: 0.25,
        },
    ];
    let passCount = 0;
    testArr.forEach((item, index) => {
        const res = func(item.input.x, item.input.n);
        console.log(`test${index + 1}`, `res:${res}, ${JSON.stringify(item)}`);
        const isPass = res === item.output;
        isPass && passCount++;
        console.log(isPass ? 'pass' : 'fail');
    });
    console.log(`total pass: ${passCount}/${testArr.length}`);
}

/**
 * @description 常规思路。考虑边界情况，x=0，n=0,n=1, n<0。该方法在力扣超时。
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow1(x, n) {
    if (x === 0) {
        return 0;
    }
    if (n === 0) return 1;
    if (n === 1) return x;

    let absN = n;
    if (n < 0) {
        absN = -n;
    }

    let res = x;
    for (let i = 2; i <= absN; i++) {
        res *= x;
    }

    if (n < 0) {
        res = 1 / res;
    }

    return res;
}

// test(myPow1);

/**
 * @description 快速幂。a(n) = {
 *  a(n/2) * a(n/2)               n为偶数
 *  a((n-1)/2) * a((n-1)/2) * a   n为奇数
 * }
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow2(x, n) {
    if (x === 0) {
        return 0;
    }
    if (n === 0) return 1;
    if (n === 1) return x;
    if (n === -1) return 1 / x;

    let res;
    let powRes;
    if (n % 2 === 0) {
        // >> 右移1位 替代除以2
        powRes = myPow2(x, n >> 1);
        res = powRes * powRes;
    } else {
        powRes = myPow2(x, (n - 1) >> 1);
        res = powRes * powRes * x;
    }

    return res;
}

test(myPow2);
