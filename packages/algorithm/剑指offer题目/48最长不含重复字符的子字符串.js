/*
 *
 *请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

示例1:

输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是"wke"，所以其长度为 3。
    请注意，你的答案必须是 子串 的长度，"pwke"是一个子序列，不是子串。


提示：

s.length <= 40000

 *
 * */

/**
 * @description 动态规划。
 * 状态定义：设动态规划列表为dp,dp[j]代表以字符s[j]为结尾的“最长不重复子字符串”的长度。
 * dic为存储遍历时字符最新出现的位置的哈希表(字典)，长度为128（ascii码表长度）。
 * 状态转移方程：
 * dp[j] = {
 *     dp[j] =  dp[j-1] + 1                    j - dic[s[j]] > dp[j-1]
 *     dp[j] =  j - dic[s[j]]                  j - dic[s[j]] <= dp[j-1]
 * }
 *
 * 现在空间复杂度为O(n)，因为需要长度为n的dp数组，
 * 通过观察状态转移方程，我们可以发现只需要用到dp[j-1]，
 * 因此可以用一个变量temp来记录dp[j-1]，
 * 同时用一个res变量来记录最大值，在更新temp时比较更新res即可。
 * 优化后的时间复杂度是O(n),空间复杂度是O(1)，长度为ascii长度的哈希表空间复杂度为O(128) = O(1)
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    if (!s) return 0;
    const dic = new Map();
    let temp = 0;
    let res = 0;
    for (let j = 0; j < s.length; j++) {
        // 上一次出现s[j]的位置
        const i = dic.get(s[j]);
        const distance = j - i;
        dic.set(s[j], j);
        if (i === undefined || distance > temp) {
            temp++;
        } else if (distance <= temp) {
            temp = distance;
        }

        if (temp > res) {
            res = temp;
        }
    }

    return res;
}
