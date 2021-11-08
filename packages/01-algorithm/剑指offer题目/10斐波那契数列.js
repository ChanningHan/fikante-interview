/**
 * 写一个函数，输入n，求斐波那契数列的第n项。斐波那契数列定义如下：
 * f(n) = {
 *  0           n=0
 *  1           n=1
 *  f(n-1)+f(n-2) n>1
 * }
 */

// [0, 1, 1, 2, 3, 5, 8, 13, 21, 24, 55]

function test(func) {
    const input1 = 10
    const output1 = 55
    const input2 = 5
    const output2 = 5
    const res1 = func(input1)
    const res2 = func(input2)

    console.log('test1,input:10', res1 === output1 ? 'pass' : 'failed')
    console.log('res1', res1)

    console.log('test2,input:5', res2 === output2 ? 'pass' : 'failed')
    console.log('res2', res2)
}

/**
 * @description 递归法
 * @param {number} n 
 */
function Fibonacci1(n) {
    if (n === 0) return 0
    if (n === 1) return 1

    return Fibonacci1(n - 1) + Fibonacci1(n - 2)
}

test(Fibonacci1)

/**
 * @description 循环实现
 * @param {number} n 
 */
function Fibonacci2(n) {
    let prevNum1 = 1
    let prevNum2 = 0
    if (n === 0) return prevNum2
    if (n === 1) return prevNum1

    let res
    for (let i = 2; i <= n; i++) {
        res = prevNum1 + prevNum2
        prevNum2 = prevNum1
        prevNum1 = res
    }
    return res
}

test(Fibonacci2)