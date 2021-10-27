/*
 *
 *在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

示例 1:

输入：s = "abaccdeff"
输出：'b'
示例 2:

输入：s = ""
输出：' '


限制：

0 <= s 的长度 <= 50000

 *
 * */

/**
 * @param {string} s
 * @return {string}
 */
function firstUniqChar(s) {
    if (!s) return ' ';
    const charMap = {};
    // [].forEach.call(s, (i) => {
    //     charMap[i] ? charMap[i]++ : (charMap[i] = 1);
    // });
    for (let i = s.length - 1; i >= 0; i--) {
        charMap[s[i]] ? charMap[s[i]]++ : (charMap[s[i]] = 1);
    }
    let res = ' ';
    // [].some.call(s, (i) => {
    //     if (charMap[i] === 1) {
    //         res = i;
    //         return true;
    //     }
    // });
    for (let i = 0; i < s.length; i++) {
        if (charMap[s[i]] === 1) {
            res = s[i];
            break;
        }
    }
    return res;
}

console.log(firstUniqChar('leetcode'));
