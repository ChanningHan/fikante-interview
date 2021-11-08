/*
 *
 *给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），
 每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？
 例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
 *
示例 1：
输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1
*
示例2:
输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 ×3 ×4 = 36
*
提示：
2 <= n <= 58
 * */

function test(func) {
    const testArr = [{
            input: 2,
            output: 1,
        },
        {
            input: 10,
            output: 36,
        },
        {
            input: 3,
            output: 2,
        },
    ];
    let passNum = 0;
    testArr.forEach((i, index) => {
        const res = func(i.input);
        console.log(`test${index + 1}, res: ${res}`);
        const isPass = res === i.output;
        console.log(isPass ? 'pass' : 'failed');
        isPass && passNum++;
    });
    console.log(`func: ${func.name}`);
    console.log(`pass: ${passNum} / ${testArr.length}`);
}

/**
 * @description 动态规划，从上到下分析：n的最优解f(n)=f(i)*f(n-i)，
 * 但从上到下递归会产生很多重复的计算，因此采用从下至上的方法进行，
 * 并将过程中的计算结果缓存起来，避免重复的计算。
 * @param {number} n
 * @return {number}
 */
function cuttingRope1(n) {
    if (n < 2) {
        console.log('wrong input: ', n);
        return 0;
    }
    // 因为至少剪一刀
    if (n === 2) {
        return 1;
    }
    if (n === 3) {
        return 2;
    }
    const products = [];
    products[0] = 0;
    products[1] = 1;
    products[2] = 2;
    products[3] = 3;
    for (let i = 4; i <= n; i++) {
        let max = 0;
        for (let j = 1; j <= i / 2; j++) {
            const product = products[j] * products[i - j];
            if (product > max) {
                max = product;
            }
        }
        products[i] = max;
    }
    return products[n];
}

test(cuttingRope1);

/**
 * @description 贪心算法，当长度>=5时，尽可能剪出长度为3的绳子，
 * n>=5时，易证2(n-2)>n且3(n-3)>n，且3(n-3)>=2(n-2)，
 * 因此当长度>=5时尽量剪出长度为3的绳子。
 * 为什么不是4，因为长度为4的绳子不剪已经是最大值4，因此没必要剪，只是题目要求至少要剪一刀。
 * @param {number} n
 * @return {number}
 */
function cuttingRope2(n) {
    if (n < 2) {
        console.log('wrong input: ', n);
        return 0;
    }
    // 因为至少剪一刀
    if (n === 2) {
        return 1;
    }
    if (n === 3) {
        return 2;
    }
    let timesOf3 = ~~(n / 3);

    // 当最后剩下长度为4时，不需要剪成3，1,此时最好的减法是剪两段2
    if (n - timesOf3 * 3 === 1) {
        timesOf3 -= 1;
    }

    const timesOf2 = ~~((n - timesOf3 * 3) / 2);

    return 3 ** timesOf3 * 2 ** timesOf2;
}

test(cuttingRope2);