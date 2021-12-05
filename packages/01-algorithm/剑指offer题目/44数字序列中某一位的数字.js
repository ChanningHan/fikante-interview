/**
 *
 * 数字以0123456789101112131415…的格式序列化到一个字符序列中。
 * 在这个序列中，第5位（从下标0开始计数）是5，第13位是1，第19位是4，等等。
 *

请写一个函数，求任意第n位对应的数字。



示例 1：

输入：n = 3
输出：3
示例 2：

输入：n = 11
输出：0

 *
 */

/**
 * @param {number} n
 * @return {number}
 */
let findNthDigit = function (n) {
    // 数字字符总数
    let total = 0;
    // 位数
    let m = 1;
    while (true) {
        debugger;
        // m位数一共有多少个字符
        let count;
        let start;
        if (m === 1) {
            count = 10;
            start = 0;
        } else {
            count = 9 * 10 ** (m - 1) * m;
            start = 10 ** (m - 1);
        }

        if (count + total < n) {
            m++;
            total += count;
            continue;
        }

        // n在m位数上的第几位
        const mN = n - total;
        const number = Math.floor(mN / m) + start;
        const index = mN % m;

        debugger;

        return number.toString()[index];
    }
};

console.log(findNthDigit(1001));
