/*
 *
 * 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。

示例 1:

输入: n = 1
输出: [1,2,3,4,5,6,7,8,9]

说明：

用返回一个整数列表来代替打印
n 为正整数

 *
 * */

function test(func) {
    const testArr = [
        {
            input: 1,
            output: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        },
    ];
    let passCount = 0;
    testArr.forEach((item, index) => {
        const res = func(item.input);
        console.log(`test${index + 1}, res:${res}`);
        const fail = item.output.some((subItem, subIndex) => subItem !== res[subIndex]);
        console.log(fail ? 'fail' : 'pass');
        !fail && passCount++;
    });
    console.log(`total pass: ${passCount}/${testArr.length}`);
}

function increment(numArr) {
    // 某一位上的和
    // 是否需要进位
    let needCarryOver = false;
    for (let i = numArr.length - 1; i >= 0; i--) {
        let nSum = numArr[i];
        // 最右一位（个位）+1
        if (i === numArr.length - 1) {
            nSum++;
        }

        if (needCarryOver) {
            nSum += 1;
            needCarryOver = false;
        }

        // 大于或等于10时需要进位
        if (nSum >= 10) {
            needCarryOver = true;
            nSum -= 10;
        }

        numArr[i] = nSum;
    }

    return numArr[0] <= 0;
}

function getNumberStrFromArr(numArr) {
    let numStr = '';
    let isBeginZero = true;
    numArr.forEach((i) => {
        // 左边开始的0忽略，直到出现不为0的才添加
        if (isBeginZero) {
            if (i === 0) return;
            isBeginZero = false;
        }
        numStr += i;
    });

    return numStr;
}

/**
 * @description 需要考虑到大数问题，因此不能用number类型来表示，需要用字符串来表示大数。
 * 因此我们要实现的是：1. 创建一个长度为n+1的字符串 2. 字符串中字符的加法； 3. 将字符串的每一个字符作为数组元素转成数组输出。
 * 字符串的n+1位用于判断是否达到了最大值，如999+1，变成1000，说明999是最大值。
 * @param {number} n
 * @return {number[]}
 */
function printNumbers(n) {
    const numArr = [];
    const res = [];
    // n+1位填充0，多一位用于判断是否达到最大值（第一位为1时说明超过了最大值，如1000和0999）
    for (let i = 0; i <= n; i++) {
        numArr.push(0);
    }

    while (increment(numArr)) {
        res.push(getNumberStrFromArr(numArr) - 0);
    }

    return res;
}

// test(printNumbers);

/**
 * @description 使用递归的方式打印数字，从第0位开始递归，遍历0~9这十个数字，每个数字再往下递归，直到层级为n-1则打印该数字。
 * @param {number} n
 */
function printNumbers2(n) {
    const numArr = [];
    const res = [];

    function generateNewNumber(index) {
        const isLast = index === n - 1;

        for (let i = 0; i <= 9; i++) {
            numArr[index] = i;

            if (isLast) {
                const numRes = getNumberStrFromArr(numArr) - 0;
                numRes && res.push(numRes);
                continue;
            }
            generateNewNumber(index + 1);
        }
    }

    generateNewNumber(0);

    return res;
}

test(printNumbers2);
