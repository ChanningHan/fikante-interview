// https://leetcode-cn.com/explore/featured/card/bytedance/242/string/1044/
/*
*
* 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你不能重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。



示例 1：

输入：s = "25525511135"
输出：["255.255.11.135","255.255.111.35"]
示例 2：

输入：s = "0000"
输出：["0.0.0.0"]
示例 3：

输入：s = "1111"
输出：["1.1.1.1"]
示例 4：

输入：s = "010010"
输出：["0.10.0.10","0.100.1.0"]
示例 5：

输入：s = "101023"
输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]


提示：

0 <= s.length <= 20
s 仅由数字组成
* */

/**
 * @param {string} s
 * @return {string[]}
 */
let restoreIpAddresses = function (s) {
    const res = [];
    const SEGMENT_COUNT = 4;

    function isLegal(startIndex, endIndex) {
        if (endIndex > s.length - 1) return false;
        if (s[startIndex] === '0' && endIndex > startIndex) return false;

        let str = '';
        for (let i = startIndex; i <= endIndex; i++) {
            str += s[i];
        }
        const num = +str;
        return num >= 0 && num <= 255;
    }

    const segmentArray = new Array(SEGMENT_COUNT);

    function dfs(index, segmentId) {
        if (segmentId === SEGMENT_COUNT) {
            index === s.length && res.push(segmentArray.join('.'));
            return;
        }

        if (index === s.length) return;

        if (s[index] === '0') {
            segmentArray[segmentId] = s[index];
            dfs(index + 1, segmentId + 1);
            return;
        }

        segmentArray[segmentId] = s[index];
        dfs(index + 1, segmentId + 1);

        if (isLegal(index, index + 1)) {
            segmentArray[segmentId] = s[index] + s[index + 1];
            dfs(index + 2, segmentId + 1);
            if (isLegal(index, index + 2)) {
                segmentArray[segmentId] = s.slice(index, index + 3);
                dfs(index + 3, segmentId + 1);
            }
        }
    }

    dfs(0, 0);

    return res;
};

console.log(restoreIpAddresses('101023'));
