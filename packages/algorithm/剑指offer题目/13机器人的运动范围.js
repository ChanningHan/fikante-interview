/*
 *
 *
 * 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，
 * 它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。
 * 例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，
 * 因为3+5+3+8=19。请问该机器人能够到达多少个格子？

示例 1：

输入：m = 2, n = 3, k = 1
输出：3
示例 2：

输入：m = 3, n = 1, k = 0
输出：1
提示：

1 <= n,m <= 100
0 <= k <= 20

 * */

/*
 * 1
 * 1
 * */

function test(func) {
    const testArr = [
        { input: { m: 2, n: 3, k: 1 }, output: 3 },
        { input: { m: 3, n: 1, k: 0 }, output: 1 },
        { input: { m: 1, n: 2, k: 1 }, output: 2 },
    ];
    testArr.slice(0).forEach((item, index) => {
        const { m, n, k } = item.input;
        const res = func(m, n, k);
        console.log(`test${index + 1}, res: ${res},output:${item.output}`);
        console.log(res === item.output ? 'pass' : 'failed');
    });
}

// 求一个数的数位之和
function getSum(num) {
    let sum = 0;
    while (num) {
        sum += num % 10;
        num = ~~(num / 10);
    }
    return sum;
}

/**
 * @description DFS
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function movingCount1(m, n, k) {
    if (m < 0 || n < 0 || k < 0) {
        console.log('wrong param');
        return 0;
    }

    const visited = new Set();
    function dfs(row, column) {
        if (row < 0 || row >= m || column < 0 || column >= n) return 0;
        if (visited.has(`${row},${column}`)) return 0;
        visited.add(`${row},${column}`);
        if (getSum(row) + getSum(column) > k) return 0;

        const res =
            1 +
            dfs(row + 1, column) +
            dfs(row - 1, column) +
            dfs(row, column + 1) +
            dfs(row, column - 1);

        return res;
    }

    return dfs(0, 0);
}

// test(movingCount1);

/**
 * @description BFS广度优先遍历。
 * 初始化时将当(0,0)加入queue队列，res为0，记录符合条件的元素个数
 * 迭代工作：队首元素弹出，若下标越界或已访问过则跳过本次迭代，
 * 将当前元素放入visited set，
 * 若其数位和大于k，则跳过本次迭代，
 * res++，
 * 将其下、右元素加入queue队列，完成一次迭代。
 * 迭代终止条件：queue队列为空。
 * 返回res
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function movingCount2(m, n, k) {
    if (m < 0 || n < 0 || k < 0) {
        console.log('wrong param');
        return 0;
    }

    const visited = new Set();
    const queue = [[0, 0]];
    let res = 0;
    while (queue.length) {
        const item = queue.shift();
        const [row, column] = item;
        if (row < 0 || row >= m || column < 0 || column >= n) continue;
        if (visited.has(`${row},${column}`)) continue;
        visited.add(`${row},${column}`);
        if (getSum(row) + getSum(column) > k) continue;
        res++;
        queue.push([row + 1, column], [row, column + 1]);
    }

    return res;
}

test(movingCount2);
