/*
 *
 *在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。
 你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、
 直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？



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

/**
 * @description 动态规划（优化空间复杂度）。
 * i>0 && j>0时，maxValue(i,j) = max(maxValue(i-1,j), maxValue(i,j-1)) + grid[i][j]。
 * 通过模拟上面算法的过程，可以发现grid中的值只有当求其本身最大价值时才会访问到，其它点访问到该坐标的都是其最大价值而不是本身的值，
 * 因此我们可以在求出某个坐标的最大价值时就将原来的值设为其最大价值，
 * 如此不需要创建额外O(mn)空间复杂度的maxMatrix矩阵来存储某个坐标的最大价值，
 * 将空间复杂度从O(mn)优化到O(1)。
 *
 * @param {number[][]} grid
 * @return {number}
 */
function maxValue2(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (i === 0 && j === 0) continue;

            if (i === 0 && j > 0) {
                grid[i][j] += grid[i][j - 1];
            } else if (i > 0 && j === 0) {
                grid[i][j] += grid[i - 1][j];
            } else if (i > 0 && j > 0) {
                grid[i][j] += Math.max(grid[i - 1][j], grid[i][j - 1]);
            }
        }
    }

    return grid[grid.length - 1][grid[0].length - 1];
}