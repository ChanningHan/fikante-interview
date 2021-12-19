// https://leetcode-cn.com/explore/featured/card/bytedance/243/array-and-sorting/1021/
// https://leetcode-cn.com/problems/permutations/solution/quan-pai-lie-by-leetcode-solution-2/
/*
* 给出集合 [1,2,3,...,n]，其所有元素共有 n! 种排列。

按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：

"123"
"132"
"213"
"231"
"312"
"321"
给定 n 和 k，返回第 k 个排列。



示例 1：

输入：n = 3, k = 3
输出："213"
示例 2：

输入：n = 4, k = 9
输出："2314"
示例 3：

输入：n = 3, k = 1
输出："123"


提示：

1 <= n <= 9
1 <= k <= n!
* */

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
let getPermutation = function (n, k) {
    const path = [];
    const used = [];
    const res = [];

    function dfs(depth) {
        if (depth === n) {
            res.push(path.join(''));
            return;
        }

        for (let i = 1; i <= n; i++) {
            if (used[i]) continue;

            path.push(i);
            used[i] = true;

            dfs(depth + 1);

            path.pop();
            used[i] = false;
        }
    }

    dfs(0);
    console.log(res);
    return res[k - 1];
};

console.log(getPermutation(3, 3));
