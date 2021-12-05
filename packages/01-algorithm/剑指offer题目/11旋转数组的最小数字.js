/**
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 * 输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。
 * 例如，数组[3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。

示例 1：

输入：[3,4,5,1,2]
输出：1
示例 2：

输入：[2,2,2,0,1]
输出：0

 */

function test(func) {
    const inputArr = [
        [3, 4, 5, 1, 2],
        [2, 2, 2, 0, 1],
        [1, 1, 1, 0, 1],
        [-1, -1, -1, -1, -1],
    ];

    const outputArr = [1, 0, 0, -1];

    inputArr.forEach((input, index) => {
        const res = func(input);
        const output = outputArr[index];
        console.log(`test${index++}`, `input: ${input},output:${output},res:${res}`);
        console.log(res === output ? 'pass' : 'failed');
    });
}

/**
 * @description 旋转后可以看作是两个递增的数组的组合，
 * 使用二分查找，开始时指针1指向头，指针2指向尾，取中间数，
 * 若指针1比中间数小，说明中间数在前一个递增数组中，最小数在中间数后面，此时将指针1指向中间数后一位。
 * 若指针1比中间数大，说明中间数在后一个递增数组中。
 * 考虑到如果旋转前面0个元素，即第一个数字小于最后一个数字，则数组不变，数组第一个即是最小的数字。
 * 如果指针1和指针2和中间数相等，则无法判断中间数属于前一个还是后一个递增数组中，此时只能顺序查找指针1到指针2范围的数组。
 * (该方法超时了，无语)
 * @param {number[]} numbers
 * @return {number}
 */
let minArray = function (numbers) {
    if (!numbers.length) throw new Error('numbers.length is zero');

    let index1 = 0;
    let index2 = numbers.length - 1;
    if (numbers[index1] < numbers[index2]) return numbers[index1];

    let distance = index2 - index1;
    let middleIndex;
    while (distance > 1) {
        middleIndex = (index1 + index2) / 2;
        if (numbers[index1] === numbers[index2] && numbers[index1] === numbers[middleIndex]) {
            // eslint-disable-next-line no-use-before-define
            return findMinInOrder(numbers, index1, index2);
        }
        if (numbers[index1] <= numbers[middleIndex]) {
            index1 = middleIndex;
        } else if (numbers[index2] >= numbers[middleIndex]) {
            index2 = middleIndex;
        }
        distance = index2 - index1;
    }
    return numbers[index2];
};

/**
 * @description 顺序查找范围内的最小数字
 * @param {number[]} numbers
 * @param {number} start
 * @param {number} end
 */
function findMinInOrder(numbers, start, end) {
    let min = numbers[start];
    for (let i = start + 1; i <= end; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
            return min;
        }
    }

    return min;
}

// test(minArray)

/**
 * @description 也是二分法。首先最小数字会存在于第二个递增数组中，
 * 开始时指针1指向头，指针2指向尾，
 * 从指针1和指针2中间取一个中间数，
 * 指针2与中间数比较，若指针2较大，说明中间数在第二个递增数组中，指针2将指向中间数，
 * 若指针2比中间数小，说明中间数在第一个递增数组中，指针1指向中间数后一个。
 * 如果指针2和中间数相等，则无法判断中间数属于第一个还是第二个递增数组中，此时只能将指针2往前移一位继续寻找。
 * @param {number[]} numbers
 * @return {number}
 */
function minArray2(numbers) {
    let low = 0;
    let hight = numbers.length - 1;
    if (numbers[low] < numbers[hight]) return numbers[low];

    while (low < hight) {
        let middleIndex = ~~((hight + low) / 2);
        if (numbers[hight] > numbers[middleIndex]) {
            hight = middleIndex;
        } else if (numbers[hight] < numbers[middleIndex]) {
            low = middleIndex + 1;
        } else {
            hight -= 1;
        }
    }
    return numbers[low];
}

test(minArray2);
