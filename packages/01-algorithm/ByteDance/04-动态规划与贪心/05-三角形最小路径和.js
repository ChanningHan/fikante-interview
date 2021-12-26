// https://leetcode-cn.com/explore/featured/card/bytedance/246/dynamic-programming-or-greedy/1030/

/*
 *给定一个三角形 triangle ，找出自顶向下的最小路径和。

每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。



示例 1：

输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
输出：11
解释：如下面简图所示：
   2
  3 4
 6 5 7
4 1 8 3
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
示例 2：

输入：triangle = [[-10]]
输出：-10


提示：

1 <= triangle.length <= 200
triangle[0].length == 1
triangle[i].length == triangle[i - 1].length + 1
-104 <= triangle[i][j] <= 104


进阶：

你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题吗？
 * */

/**
 * @param {number[][]} triangle
 * @return {number}
 */
let minimumTotal = function (triangle) {
    /*
     *  动态规划
     *  dp[i][j] = min(dp[i-1][j], dp[i-1][j-1]) + triangle[i][j]
     * i表示层数，j表示该层中的下标
     * res[i] = min(dp[i][0 =< j < triangle[i].length])
     * */

    // 上一层的动态规划结果数组
    let res;
    let prevDPArray = [triangle[0][0]];
    let currentDPArray = [];
    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            currentDPArray[j] =
                Math.min(
                    prevDPArray[j ? j - 1 : j],
                    prevDPArray[j < prevDPArray.length ? j : j - 1]
                ) + triangle[i][j];
            if (i === triangle.length - 1 && (res === undefined || currentDPArray[j] < res)) {
                res = currentDPArray[j];
            }
        }
        prevDPArray = currentDPArray;
        currentDPArray = [];
    }

    return res ?? triangle[0][0];
};

// console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
// console.log(minimumTotal([[-10]]));
console.log(minimumTotal([[-1], [2, 3], [1, -1, -1]]));
