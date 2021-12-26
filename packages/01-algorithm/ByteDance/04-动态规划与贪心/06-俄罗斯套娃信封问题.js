// https://leetcode-cn.com/explore/featured/card/bytedance/246/dynamic-programming-or-greedy/1031/

/*
 *给你一个二维整数数组 envelopes ，其中 envelopes[i] = [wi, hi] ，表示第 i 个信封的宽度和高度。

当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。

请计算 最多能有多少个 信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。

注意：不允许旋转信封。


示例 1：

输入：envelopes = [[5,4],[6,4],[6,7],[2,3]]
输出：3
解释：最多信封的个数为 3, 组合为: [2,3] => [5,4] => [6,7]。
示例 2：

输入：envelopes = [[1,1],[1,1],[1,1]]
输出：1


提示：

1 <= envelopes.length <= 5000
envelopes[i].length == 2
1 <= wi, hi <= 104
 * */

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
let maxEnvelopes = function (envelopes) {
    // 按w主排序，h辅助排序，排序后为w递增，h递减，按h找出最长递增子序列的长度即可。
    // dp[i] = dp[j] + 1     if j<i && envelopes[j][1] < envelopes[i][1]
    // dp[i] = 1             else

    envelopes = envelopes.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1];
        }
        return a[0] - b[0];
    });

    const dp = new Array(envelopes.length).fill(1);

    let res = 1;
    for (let i = 0; i < envelopes.length; i++) {
        const h = envelopes[i][1];
        for (let j = 0; j < i; j++) {
            if (envelopes[j][1] < h) {
                dp[i] = Math.max(dp[j] + 1, dp[i]);
                if (dp[i] > res) {
                    res = dp[i];
                }
            }
        }
    }

    return res;
};

maxEnvelopes([
    [2, 1],
    [2, 2],
    [2, 4],
    [4, 2],
    [4, 1],
    [1, 1],
    [1, 2],
    [3, 1],
    [3, 4],
]);
