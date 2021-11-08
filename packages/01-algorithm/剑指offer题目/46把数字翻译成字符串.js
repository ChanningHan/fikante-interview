/*
 *
 *给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，
 1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。
 请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。



示例 1:

输入: 12258
输出: 5
解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"


提示：

0 <= num < 231

 *
 * */

/**
 * @description 动态规划，f(n) = f(n-1) + g(n,n-1) * f(n-2)；
 * g(n,n-1)表示n和n-1加起来是否在10~25之间，若是则返回1否则返回0，这里大于或等于10是因为不允许前置0的情况，比如01。
 *
 * @param {number} num
 * @return {number}
 */
function translateNum(num) {
    const numStr = num.toString();
    if (numStr.length === 1) return 1;

    function isLegal(index1, index2) {
        const composition = numStr[index1] + numStr[index2] - 0;
        return composition >= 10 && composition <= 25 ? 1 : 0;
    }

    const countArr = [1];
    countArr[1] = isLegal(0, 1) + countArr[0];
    for (let i = 2; i < numStr.length; i++) {
        countArr[i] = countArr[i - 1] + isLegal(i - 1, i) * countArr[i - 2];
    }

    return countArr[countArr.length - 1];
}

console.log(translateNum(1112));
console.log(translateNum(12258));