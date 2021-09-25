/**
 * 
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

示例 1：

输入：n = 2
输出：2
示例 2：

输入：n = 7
输出：21
示例 3：

输入：n = 0
输出：1
提示：

0 <= n <= 100

 * 
 */

/**
 * @description 青蛙上n级台阶时，先考虑青蛙第一次跳的选择有两种，跳一级和跳2级，如果跳一级则剩余楼梯有f(n-1)中方法，
 * 如果跳二级则剩余楼梯有f(n-2)种跳法。因此当n>2时，f(n)=f(n-1)+f(n-2)。
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
    let prevNum1 = 1
    let prevNum2 = 1
    if (n < 2) return 1
    let res
    for (let i = 2; i <= n; i++) {
        res = prevNum1 + prevNum2
        if (res > 1000000007) res -= 1000000007

        prevNum2 = prevNum1
        prevNum1 = res
    }
    return res
};


function test(func) {
    const inputArr = [2, 7, 0]
    const outputArr = [2, 21, 1]
    inputArr.forEach((input, index) => {
        const res = func(input)
        console.log(res === outputArr[index] ? 'pass' : 'failed', index + 1)
        console.log(`res1:${res}`)
    })
}

test(numWays)