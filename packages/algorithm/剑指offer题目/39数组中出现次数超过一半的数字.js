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
 * @description 快排分组方法（创建left、right数组）
 * @param {number[]} nums
 * @param {number} start
 * @param {number} end
 * @return {number}
 * */
function partition1(nums, start, end) {
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

// 交换两个元素
function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

function getRandom(start, end) {
    return Math.floor(Math.random() * (end - start + 1) + start);
}

/**
 * @description 快排分组方法2（时间复杂度O(1)，不创建额外数组）
 * @param {number[]} nums
 * @param {number} start
 * @param {number} end
 * @return {number}
 * */
function partition(nums, start, end) {
    // 指向第一个大于middleNumber的数的指针
    let j = start - 1;
    const middleIndex = ((end - start + 1) >> 1) + start;
    swap(nums, middleIndex, end);

    for (let i = start; i < end; i++) {
        if (nums[i] >= nums[end]) {
            if (j < start) {
                j = i;
            }
        } else if (j >= start) {
            swap(nums, i, j);
            j++;
        }
    }

    j >= start && swap(nums, j, end);

    return j >= start ? j : start;
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
    if (checkMoreThanHalf(nums, nums[index])) return nums[index];
    return nums[index];
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
        {
            input: [
                47, 47, 72, 47, 72, 47, 79, 47, 12, 92, 13, 47, 47, 83, 33, 15, 18, 47, 47, 47, 47,
                64, 47, 65, 47, 47, 47, 47, 70, 47, 47, 55, 47, 15, 60, 47, 47, 47, 47, 47, 46, 30,
                58, 59, 47, 47, 47, 47, 47, 90, 64, 37, 20, 47, 100, 84, 47, 47, 47, 47, 47, 89, 47,
                36, 47, 60, 47, 18, 47, 34, 47, 47, 47, 47, 47, 22, 47, 54, 30, 11, 47, 47, 86, 47,
                55, 40, 49, 34, 19, 67, 16, 47, 36, 47, 41, 19, 80, 47, 47, 27,
            ],
            output: 47,
        },
        {
            input: [
                12, 52, 12, 70, 12, 61, 12, 12, 50, 72, 82, 12, 11, 25, 28, 43, 40, 12, 12, 53, 12,
                12, 98, 12, 12, 92, 81, 2, 12, 15, 40, 12, 12, 9, 12, 31, 12, 12, 12, 12, 77, 12,
                12, 50, 12, 12, 12, 93, 41, 92, 12, 12, 12, 12, 12, 12, 12, 12, 12, 37, 48, 14, 12,
                70, 82, 12, 80, 12, 12, 12, 12, 56, 30, 12, 8, 12, 50, 12, 20, 12, 21, 97, 12, 42,
                12, 10, 12, 38, 73, 15, 9, 11, 79, 12, 12, 28, 51, 12, 15, 12,
            ],
            output: 12,
        },
    ].slice(0);
    testArr.forEach((item, index) => {
        console.log(`test${index + 1},${JSON.stringify(item)}`);
        const res = fn(item.input);
        console.log('res', res);
        console.log(res === item.output ? 'pass' : 'fail');
    });
}

// test(majorityElement);

/**
 * @description 解法二，Boyer-Moore 投票法。
 * 先将第一个数设为候选人，且票数为1。
 * 然后遍历数组，遇到不同的数则减1，相同的数则减1。
 * 当票数为0时，下一次遍历将那个数设为新的候选人，且票数为1。
 * 当遍历结束时，候选人即为期望的数，因为出现次数大于一半的数字候选人票数必然>=1。
 *
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement2(nums) {
    if (checkInvalidArray(nums)) throw new Error('arr is empty');
    let candidate = nums[0];
    let votes = 1;

    for (let i = 1; i < nums.length; i++) {
        if (votes === 0) {
            candidate = nums[i];
            votes = 1;
            continue;
        }

        if (nums[i] === candidate) {
            votes++;
        } else {
            votes--;
        }
    }

    return candidate;
}

test(majorityElement2);
