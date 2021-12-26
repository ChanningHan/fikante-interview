// https://leetcode-cn.com/explore/featured/card/bytedance/246/dynamic-programming-or-greedy/1028/

/*
* 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。



示例 1：


输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
输出：4
示例 2：


输入：matrix = [["0","1"],["1","0"]]
输出：1
示例 3：

输入：matrix = [["0"]]
输出：0


提示：

m == matrix.length
n == matrix[i].length
1 <= m, n <= 300
matrix[i][j] 为 '0' 或 '1'
* */

/**
 * @param {string[][]} matrix
 * @return {number}
 */
let maximalSquare = function (matrix) {
    /*
     *  dp[i][j]表示以坐标(i,j)为右下角的正方形的大小。
     *  dp[i][j] = min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]) + 1
     * */
    let max = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (+matrix[i][j] === 0) {
                matrix[i][j] = 0;
                continue;
            }

            if (!i || !j) {
                matrix[i][j] = 1;
            } else {
                matrix[i][j] =
                    Math.min(+matrix[i - 1][j], +matrix[i][j - 1], +matrix[i - 1][j - 1]) + 1;
            }

            if (matrix[i][j] > max) {
                max = matrix[i][j];
            }
        }
    }

    return max ** 2;
};

console.log(
    maximalSquare([
        ['1', '0', '1', '0', '0'],
        ['1', '0', '1', '1', '1'],
        ['1', '1', '1', '1', '1'],
        ['1', '0', '0', '1', '0'],
    ])
);

console.log(
    maximalSquare([
        ['0', '1'],
        ['1', '0'],
    ])
);
