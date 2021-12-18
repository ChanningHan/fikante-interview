// https://leetcode-cn.com/explore/featured/card/bytedance/242/string/1012/

/*
*
* 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: s = "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
示例 4:

输入: s = ""
输出: 0


提示：

0 <= s.length <= 5 * 104
s 由英文字母、数字、符号和空格组成
*
* */

/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function (s) {
    if (!s || !s.length) return 0;

    const charMap = {};
    let maxLen = 0;

    const len = s.length;
    let start = 0;
    let end = 0;
    for (let i = 0; i < len; i++) {
        end = i;
        const subStrLen = end - start + 1;

        if (charMap[s[i]] !== undefined) {
            const offset = end - charMap[s[i]] + 1;
            if (subStrLen >= offset) {
                start = charMap[s[i]] + 1;
                charMap[s[i]] = i;
                continue;
            }
        }

        if (subStrLen > maxLen) {
            maxLen = subStrLen;
        }
        charMap[s[i]] = i;
    }

    return maxLen;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring(' '));
console.log(lengthOfLongestSubstring('dvdf'));
