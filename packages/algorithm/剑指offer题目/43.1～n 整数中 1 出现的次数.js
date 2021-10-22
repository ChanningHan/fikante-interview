/**
 * 
 *  输入一个整数 n ，求1～n这n个整数的十进制表示中1出现的次数。

例如，输入12，1～12这些整数中包含1 的数字有1、10、11和12，1一共出现了5次。

 

示例 1：

输入：n = 12
输出：5
示例 2：

输入：n = 13
输出：6
 

限制：

1 <= n < 2^31

 * 
 */

/**
 * 解题思路： https://leetcode-cn.com/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof/solution/1n-zheng-shu-zhong-1-chu-xian-de-ci-shu-umaj8/
 * 
 */

/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {

    let res = 0;
    let nStr = n.toString()
    for (let k = 0; k < nStr.length; k++) {
        res += Math.floor(n / Math.pow(10, k + 1)) * Math.pow(10, k) + Math.min(Math.max(n % Math.pow(10, k + 1) - Math.pow(10, k) + 1, 0), Math.pow(10, k))
    }

    return res
};

console.log(countDigitOne(1234567));