/**
 *
 * 写一个函数，求两个整数之和，
 * 要求在函数体内不得使用 “+”、“-”、“*”、“/” 四则运算符号。



示例:

输入: a = 1, b = 1
输出: 2


提示：

a,b均可能是负数或 0
结果不会溢出 32 位整数

 *
 */

/**
 * @description 利用位运算（异或、与）进行加法。
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function add(a, b) {
    // 无进位和
    let sum = a;
    // 进位
    let carry = 0;

    while (b) {
        sum = a ^ b;
        carry = (a & b) << 1;
        a = sum;
        b = carry;
    }

    return sum;
}

console.log(add(2, -8));
