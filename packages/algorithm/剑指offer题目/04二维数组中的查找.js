/*
 *
 * 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
示例:

现有矩阵 matrix 如下：

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
给定 target = 5，返回 true。

给定 target = 20，返回 false。



限制：

0 <= n <= 1000

0 <= m <= 1000
 *
 * */

function test(func) {
    const matrix = [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30],
    ];
    const target1 = 5;
    const target2 = 20;

    if (func(matrix, target1)) {
        console.log(`test1 pass.target: ${target1}`);
    } else {
        console.log(`test1 failed.target: ${target1}`);
    }

    if (!func(matrix, target2)) {
        console.log(`test2 pass.target: ${target2}`);
    } else {
        console.log(`test2 failed.target: ${target2}`);
    }
}

/**
 * @description 选取右上角的数字进行比较，当目标数字等于所选数字，则直接返回true，
 *              如果目标数字小于所选数字，说明目标数字只可能在其左方或左下方，不可能在下方，因此排除掉所选数字所在的列；
 *              如果目标数字大于所选数字，说明目标数字只可能在其下方或左下方，不可能在作坊，因此排除掉所选数字所在的行；
 *              直到没有剩余的行数或列数，则说明目标数字不在该矩阵中，返回false。
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function findNumberIn2DArray(matrix, target) {
    if (!Array.isArray(matrix) || !matrix[0] || !Array.isArray(matrix[0])) {
        console.log('wrong matrix');
        return false;
    }

    const rows = matrix.length;
    const columns = matrix[0].length;

    let row = 0;
    let column = columns - 1;
    while (row <= rows - 1 && column >= 0) {
        const pickNumber = matrix[row][column];
        if (target === pickNumber) {
            return true;
        }
        if (target < pickNumber) {
            column--;
        } else if (target > pickNumber) {
            row++;
        }
    }

    return false;
}

test(findNumberIn2DArray);
