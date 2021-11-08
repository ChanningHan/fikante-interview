/**
 * 
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

 

示例 1：

输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
示例 2：

输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 

限制：

0 <= matrix.length <= 100
0 <= matrix[i].length <= 100

 * 
 * 
 */


function test(fn) {
    const testArr = [{
            input: [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ],
            output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
        },
        {
            input: [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]
            ],
            output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
        },
        {
            input: [
                [7],
                [9],
                [6]
            ],
            output: [7, 9, 6]
        }
    ]

    testArr.slice(2).forEach((item, index) => {
        const res = fn(item.input)
        console.log(`test${index+1},${JSON.stringify(item)}`);
        console.log('res', res);
        const isPass = res.join('') === item.output.join('')
        console.log(isPass ? 'pass' : 'fail');
    })
}

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
    if (!matrix.length || !matrix[0] || !matrix[0].length) return []

    let left = 0;
    let top = 0;
    let right = matrix[0].length - 1
    let bottom = matrix.length - 1
    const res = []

    while (left <= right && top <= bottom) {
        // 左到右
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i])
        }

        // 上到下
        for (let i = top + 1; i <= bottom; i++) {
            res.push(matrix[i][right])
        }

        if (top === bottom || left === right) {
            break
        }

        // 右到左
        for (let i = right - 1; i >= left; i--) {
            res.push(matrix[bottom][i])
        }

        // 下到上
        for (let i = bottom - 1; i >= top + 1; i--) {
            res.push(matrix[i][left])
        }
        left++
        top++
        bottom--
        right--
    }

    return res

};

test(spiralOrder)