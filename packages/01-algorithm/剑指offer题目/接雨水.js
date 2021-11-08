/*
*
* 给定n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。



示例 1：



输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
示例 2：

输入：height = [4,2,0,3,2,5]
输出：9


提示：

n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105

*
* */

/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
    function findWall(matrix, row) {
        let firstWall = -1;
        let lastWall = -1;
        matrix[row].forEach((item, index) => {
            if (!item) return;
            firstWall === -1 && (firstWall = index);
            lastWall = index;
        });
        return [firstWall, lastWall];
    }

    // 构建二维矩阵
    function buildMatrix() {
        const matrix = [];
        // 得到矩阵行数
        const rowLength = Math.max(...height);
        const columnLength = height.length;
        for (let i = 0; i < rowLength; i++) {
            matrix.push([]);
            for (let j = 0; j < columnLength; j++) {
                matrix[i][j] = i < height[j];
            }
        }
        return matrix;
    }

    const matrix = buildMatrix();

    // 雨水量
    let waterCount = 0;
    for (let row = 0; row < matrix.length; row++) {
        // 第一块墙和最后一块墙的下标
        const [firstWall, lastWall] = findWall(matrix, row);
        for (let column = 0; column < matrix[0].length; column++) {
            // 当前位置为墙则跳过
            if (matrix[row][column]) continue;

            // 在两个墙之间的话则这个位置可以接雨水
            if (firstWall < column && column < lastWall) {
                waterCount++;
            }
        }
    }

    console.log('waterCount1');
    console.log(waterCount);
    return waterCount;
}

// trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
// trap([4, 2, 0, 3, 2, 5]);
// trap([2, 0, 2]);
// trap([6, 4, 2, 0, 3, 2, 0, 3, 1, 4, 5, 3, 2, 7, 5, 3, 0, 1, 2, 1, 3, 4, 6, 8, 1, 3]);

/**
 * @param {number[]} height
 * @return {number}
 */
function trap2(height) {
    // 找到某一行的第一块墙和最后一块墙
    function findWall(row) {
        let firstWall = -1;
        let lastWall = -1;

        for (let column = 0; column < height.length; column++) {
            if (height[column] - 1 < row) continue;
            firstWall === -1 && (firstWall = column);
            lastWall = column;
        }

        return [firstWall, lastWall];
    }

    // 得到矩阵行数
    const rowLength = Math.max(...height);

    // 雨水量
    let waterCount = 0;

    for (let row = 0; row < rowLength; row++) {
        // 得到这一行的第一块墙和最后一块墙的下标
        const [firstWall, lastWall] = findWall(row);
        if (firstWall === -1 || lastWall === -1) break;
        for (let i = firstWall + 1; i <= lastWall - 1; i++) {
            // 在两个墙之间且该列这一行为空的话则这个位置可以接雨水
            height[i] - 1 < row && waterCount++;
        }
    }

    console.log('waterCount2');
    console.log(waterCount);

    return waterCount;
}

trap2([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
trap2([4, 2, 0, 3, 2, 5]);
trap2([2, 0, 2]);
trap2([6, 4, 2, 0, 3, 2, 0, 3, 1, 4, 5, 3, 2, 7, 5, 3, 0, 1, 2, 1, 3, 4, 6, 8, 1, 3]);
