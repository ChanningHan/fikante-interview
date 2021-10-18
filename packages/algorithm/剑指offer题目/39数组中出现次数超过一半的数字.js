/*
 *
 *数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。



你可以假设数组是非空的，并且给定的数组总是存在多数元素。



示例1:

输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
输出: 2


限制：

1 <= 数组长度 <= 50000

 *
 * */

/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number} end
 * @return {boolean} isValid
 * */
function checkInvalidArray(nums) {
    return !nums || nums.length <= 0;
}

/**
 * @param {number[]} nums
 * @return {boolean} isMoreThanHalf
 * */
function checkMoreThanHalf(nums, number) {
    let times = 0;
    nums.forEach((i) => {
        if (i === number) times++;
    });
    return times > nums.length / 2;
}

/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number} end
 * @return {number}
 * */
function partition(nums, start, end) {
    if (start >= end) {
        return start;
    }
    const standerIndex = nums.length >> 1;
    const standerNumber = nums[standerIndex];
    const left = [];
    const right = [];
    for (let i = start; i <= end; i++) {
        if (i === standerIndex) continue;
        if (nums[i] < standerNumber) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }

    const resIndex = left.length + start;

    const arr = nums.slice(0, start).concat(left, [standerNumber], right, nums.slice(end + 1));
    nums.forEach((_, index) => {
        nums[index] = arr[index];
    });
    return resIndex;
}
/**
 * @description 解法一，使用类似快速排序的算法。
 * 核心思路是如果一个数的次数大于数组的一半长度，那么它一定是这个数组的中位数。
 * 先随便找一个数，遍历数组，将比这个数小的放在其左边，比这个数大的放在其右边，
 * 如果此时这个数的下标刚好是n/2，那么这个数便是中位数，
 * 如果小于n/2则中位数在其右边，将其右半部分进行递归上述过程，
 * 如果大于n/2则中位数在其左边，将左半部分进行递归上述过程，
 * 然后验证这个数的次数是否大于数组长度的一半，遍历一次数组即可。
 *
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
    if (checkInvalidArray(nums)) throw new Error('nums is empty');

    const middle = nums.length >> 1;
    let start = 0;
    let end = nums.length - 1;
    let index = partition(nums, start, end);
    while (index !== middle) {
        if (index < middle) {
            start = index + 1;
            index = partition(nums, start, end);
        } else {
            end = index - 1;
            index = partition(nums, start, end);
        }
    }
    if (checkMoreThanHalf(nums, nums[index])) return nums[middle];
    return nums[middle];
};

function test(fn) {
    const testArr = [
        {
            input: [3, 2, 3],
            output: 3,
        },
        {
            input: [1, 2, 3, 2, 2, 2, 5, 4, 2],
            output: 2,
        },
        {
            input: [2, 2],
            output: 2,
        },
    ].slice(2);
    testArr.forEach((item, index) => {
        console.log(`test${index + 1},${JSON.stringify(item)}`);
        const res = fn(item.input);
        console.log('res', res);
        console.log(res === item.output ? 'pass' : 'fail');
    });
}

test(majorityElement);
