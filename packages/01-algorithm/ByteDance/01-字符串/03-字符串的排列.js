// https://leetcode-cn.com/explore/featured/card/bytedance/242/string/1016/

/*
* 给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。

换句话说，s1 的排列之一是 s2 的 子串 。



示例 1：

输入：s1 = "ab" s2 = "eidbaooo"
输出：true
解释：s2 包含 s1 的排列之一 ("ba").
示例 2：

输入：s1= "ab" s2 = "eidboaoo"
输出：false


提示：

1 <= s1.length, s2.length <= 104
s1 和 s2 仅包含小写字母
*
* */

function swap(str, index1, index2) {
    const arr = str.split('');
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index1] = temp;
    return arr.join('');
}

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
let checkInclusion = function (s1, s2) {
    if (!s1) return true;
    if (!s2) return false;

    let start = 0;
    let end = s1.length - 1;
    const window = [];

    const charMap = {};
    for (let i = 0; i < s1.length; i++) {
        if (!charMap[s1[i]]) {
            charMap[s1[i]] = 1;
        } else {
            charMap[s1[i]]++;
        }
    }

    while (end < s2.length) {
        let count = s1.length;
        const copyCharMap = { ...charMap };
        for (let i = start; i <= end; i++) {
            if (!copyCharMap[s2[i]]) {
                start++;
                end++;
                break;
            } else {
                copyCharMap[s2[i]]--;
                count--;
            }
        }
        if (!count) {
            return true;
        }
    }

    return false;
};

console.log(checkInclusion('ab', 'eidbaooo'));
