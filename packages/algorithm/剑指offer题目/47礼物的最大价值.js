/*
 *
 *在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？



示例 1:

输入:
[
 [1,3,1],
 [1,5,1],
 [4,2,1]
]
输出: 12
解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物


提示：

0 < grid.length <= 200
0 < grid[0].length <= 200

 *
 * */

/**
 * @description 动态规划。
 * i>0 && j>0时，maxValue(i,j) = max(maxValue(i-1,j), maxValue(i,j-1)) + grid[i][j]
 *
 * @param {number[][]} grid
 * @return {number}
 */
function maxValue(grid) {
    const maxMatrix = [];

    for (let i = 0; i < grid.length; i++) {
        maxMatrix.push([]);
        for (let j = 0; j < grid[0].length; j++) {
            maxMatrix[i][j] = grid[i][j];
            if (i === 0 && j === 0) continue;

            if (i === 0 && j > 0) {
                maxMatrix[i][j] += maxMatrix[i][j - 1];
            } else if (i > 0 && j === 0) {
                maxMatrix[i][j] += maxMatrix[i - 1][j];
            } else if (i > 0 && j > 0) {
                maxMatrix[i][j] += Math.max(maxMatrix[i - 1][j], maxMatrix[i][j - 1]);
            }
        }
    }

    return maxMatrix[grid.length - 1][grid[0].length - 1];
}
