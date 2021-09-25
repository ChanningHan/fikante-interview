/**
 * 
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

 

例如，在下面的 3×4 的矩阵中包含单词 "ABCCED"（单词中的字母已标出）。
 

示例 1：

输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
示例 2：

输入：board = [["a","b"],["c","d"]], word = "abcd"
输出：false
 */

function test() {
    const testArr = [{
            board: [
                ["A", "B", "C", "E"],
                ["S", "F", "C", "S"],
                ["A", "D", "E", "E"],
            ],
            word: "ABCCED",
            output: true
        },
        {
            board: [
                ["a", "b"],
                ["c", "d"]
            ],
            word: "abcd",
            output: false
        },
        {
            board: [
                ["C", "A", "A"],
                ["A", "A", "A"],
                ["B", "C", "D"]
            ],
            word: 'AAB',
            output: true
        }
    ]

    testArr.forEach((item, index) => {
        const res = exist(item.board, item.word)
        console.log(`test${index+1}, res:${res}`);
        console.log(res === item.output ? 'pass' : 'failed')
    })
}


/**
 * @description 深度优先遍历DFS+剪枝。
 * 首先是统一每次遍历方向顺序：下、上、右、左。
 * 然后分析递归返回false的情况：1. 超出数组边界；2. 当前矩阵元素与目标矩阵元素不符合；3. 当前矩阵元素已访问过。
 * 递归返回true的情况：目标字符在word中的索引为k，且k=word.length-1。
 * 关于记录矩阵元素是否被访问过，有两种方式，1是通过创建一个辅助空间，通过boolean值来标记某个元素是否被访问过，
 * 2是比较巧妙的一种做法，将已访问过的元素设置为空字符串'',当回溯时再通过word还原这些元素。这里采用第二种做法。
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if (!board.length || !board[0].length) {
        console.log('empty board')
        return false
    }

    for (let row = 0; row < board.length; row++) {
        for (let column = 0; column < board[0].length; column++) {
            const res = dfs(board, word, row, column, 0)
            if (res) {
                return res
            }
        }
    }
    return false

};

// 深度优先遍历
function dfs(board, word, row, column, k) {
    if (row >= board.length || row < 0 || column >= board[0].length || column < 0) return false

    if (!board[row][column]) return false

    if (board[row][column] !== word[k]) return false

    if (k === word.length - 1) return true

    board[row][column] = ''

    const res = dfs(board, word, row + 1, column, k + 1) || dfs(board, word, row - 1, column, k + 1) ||
        dfs(board, word, row, column + 1, k + 1) || dfs(board, word, row, column - 1, k + 1)

    board[row][column] = word[k]

    return res
}

test()