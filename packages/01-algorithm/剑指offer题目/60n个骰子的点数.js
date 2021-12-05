/**
 *
 * 把n个骰子扔在地上，所有骰子朝上一面的点数之和为s。
 * 输入n，打印出s的所有可能的值出现的概率。



你需要用一个浮点数数组返回答案，
其中第 i 个元素代表这 n 个骰子所能掷出的点数集合中第 i 小的那个的概率。



示例 1:

输入: 1
输出: [0.16667,0.16667,0.16667,0.16667,0.16667,0.16667]
示例2:

输入: 2
输出: [0.02778,0.05556,0.08333,0.11111,0.13889,0.16667,0.13889,0.11111,0.08333,0.05556,0.02778]


限制：

1 <= n <= 11

 *
 */

/**
 * @description 用两个数组，用来存储每个点数出现的次数。
 * 在一轮循环中，将点数和为s存储为一个数组的第s项，
 * 在下一轮循环中，相当于新增了一颗骰子，那么和为s出现的次数为上一轮中s-1,s-2...s-6出现次数的总和。
 * s的范围是该轮的骰子数n~6*n，
 * 然后交换两个数组，第二组作为上一轮，第一组作为下一轮，同时将第一轮的n之前的元素置0（因为n个骰子和最小为n）。
 * @param {number} n
 * @return {number[]}
 */
function dicesProbability(n) {
    const maxValue = 6;
    const sumCounts = [[], []];

    // 用于交换数组的标记变量
    let flag = 0;

    // 先初始化一颗骰子
    for (let i = 1; i <= maxValue; i++) {
        sumCounts[flag][i] = 1;
    }

    for (let i = 2; i <= n; i++) {
        for (let sum = i; sum <= maxValue * i; sum++) {
            sumCounts[1 - flag][sum] = 0;

            // 统计上一轮中sum-j的次数(1<=j<=6)
            // j<=sum-i+1是因为上一轮的和sum-j最小为上一轮的骰子数(i-1)，因此sum-j>=i-1，
            // 移项得j<=sum-i+1，另外还有个条件：j<sum，否则sum-j出现0或负数，
            // 但sum-i+1<sum，因此j<=sum-i+1包括了j<sum这一条件。
            for (let j = 1; j <= sum - i + 1 && j <= maxValue; j++) {
                sumCounts[1 - flag][sum] += sumCounts[flag][sum - j] || 0;
            }
        }
        // 交换数组
        flag = flag ? 0 : 1;
    }

    const res = [];

    const maxSum = maxValue * n;
    const totalTimes = Math.pow(maxValue, n);
    for (let i = n; i <= maxSum; i++) {
        const ratio = sumCounts[flag][i] / totalTimes;
        res.push(ratio);
    }

    console.log(res);

    return res;
}

// dicesProbability(1)
const res = dicesProbability(4);

// 4
let output = [
    0.00077, 0.00309, 0.00772, 0.01543, 0.02701, 0.04321, 0.06173, 0.08025, 0.09645, 0.10802,
    0.11265, 0.10802, 0.09645, 0.08025, 0.06173, 0.04321, 0.02701, 0.01543, 0.00772, 0.00309,
    0.00077,
];
