// https://leetcode-cn.com/problems/multiply-strings/

/*
*
* 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

示例 1:

输入: num1 = "2", num2 = "3"
输出: "6"
示例 2:

输入: num1 = "123", num2 = "456"
输出: "56088"
说明：

num1 和 num2 的长度小于110。
num1 和 num2 只包含数字 0-9。
num1 和 num2 均不以零开头，除非是数字 0 本身。
不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。

*
* */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
let multiply = function (num1, num2) {
    if (num1 === '0' || num2 === '0') return '0';

    const len1 = num1.length;
    const len2 = num2.length;
    /*
     * 可证明：
     * 最大：num1 = 10 ^ (len1) - 1; num2 = 10 ^ (len2) - 1;
     * num1 * num2 = 10^(len1+len2) - 10 ^ (len1) - 10 ^ (len2) + 1  < 10 ^ (len1+len2)
     * 此时长度小于len1+len2+1
     * 最小：num1 = 10 ^ (len1-1); num2 = 10 ^ (lene2 -1)
     * num1 * num2 = 10 ^ (len1 + len2 -2)
     * 此时长度为len1+len2-1
     *
     * 因此长度len 范围为：len1+len2-1 <= len <= len1+len2
     * 这里取最大可能取得的长度len1+len2即可
     * */
    const resLen = len1 + len2;
    const resArr = new Array(resLen).fill(0);

    // let currentIndex = resLen - 1;
    for (let i = len1 - 1; i >= 0; i--) {
        // 这是由resLen - 1 - (len2 -1 - i)推导出来的。初始值为resLen - 1，然后递减1；
        let currentIndex = len2 + i;
        for (let j = len2 - 1; j >= 0; j--) {
            resArr[currentIndex] += (num1[i] - 0) * (num2[j] - 0);
            currentIndex--;
        }
    }

    // 处理进位
    for (let i = resLen - 1; i >= 0; i--) {
        const carry = ~~(resArr[i] / 10);
        resArr[i - 1] += carry;
        resArr[i] %= 10;
    }

    const startIndex = resArr[0] ? 0 : 1;
    let res = '';
    for (let i = startIndex; i < resLen; i++) {
        res += resArr[i];
    }

    return res;
};

console.log(multiply('1234', '456'));
