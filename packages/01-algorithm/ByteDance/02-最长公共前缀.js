// https://leetcode-cn.com/submissions/detail/249695103/
/*
* 编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。



示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"
示例 2：

输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。


提示：

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] 仅由小写英文字母组成
*
* */

/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function (strs) {
    let minStr = strs[0];

    let res = '';

    if (!minStr || !minStr.length) return res;

    strs.forEach((i) => {
        if (i.length < minStr.length) {
            minStr = i;
        }
    });

    for (let i = 0; i < minStr.length; i++) {
        // eslint-disable-next-line no-loop-func
        const isAllSame = strs.every((str) => str[i] === minStr[i]);
        if (isAllSame) {
            res += minStr[i];
        } else {
            break;
        }
    }

    return res;
};
