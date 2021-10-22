/*
 *
 *输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

要求时间复杂度为O(n)。



示例1:

输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释:连续子数组[4,-1,2,1] 的和最大，为6。


提示：

1 <=arr.length <= 10^5
-100 <= arr[i] <= 100

 *
 * */

function test(fn) {
    const testArr = [
        {
            input: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
            output: 6,
        },
        {
            input: [-2, -1],
            output: -1,
        },
        {
            input: [-1, 1, 2, 1],
            output: 4,
        },
    ];

    let passCount = 0;
    testArr.forEach((item, index) => {
        console.log(`test${index + 1}`);
        console.log(JSON.stringify(item));
        const res = fn(item.input);
        console.log('res', res);
        const isPass = res === item.output;
        isPass && passCount++;
        console.log(isPass ? 'pass' : 'fail');
    });
    console.log(`total pass: ${passCount} / ${testArr.length}`);
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
    if (!nums.length) return 0;
    if (nums.length === 1) return nums[0];
    let maxValue = nums[0];
    let count = 0;
    nums.forEach((num) => {
        if (maxValue < 0 && num > maxValue) {
            maxValue = num;
            count = num;
            return;
        }

        if (num >= 0) {
            count += num;
            if (count > maxValue) {
                maxValue = count;
            }
        } else if (count + num <= 0) {
            count = 0;
        } else {
            count += num;
        }
    });

    return maxValue;
}

/**
 * @description 动态规划。
 * f(i) = {
 *     nums[i]              i===0 || f(i-1) <= 0
 *     nums[i] + f(i-1)     i>0   && f(i-1) > 0
 * }
 * 然后求出最大的f(i)即可。
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray2(nums) {
    if (!nums.length) return 0;
    const maxArr = [];
    let max;
    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || maxArr[i - 1] <= 0) {
            maxArr[i] = nums[i];
        } else if (i > 0 && maxArr[i - 1] > 0) {
            maxArr[i] = nums[i] + maxArr[i - 1];
        }

        if (max === undefined || maxArr[i] > max) {
            max = maxArr[i];
        }
    }

    return max;
}

test(maxSubArray2);
