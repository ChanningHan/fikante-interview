/*
*
* 找出数组中重复的数字。


在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，
但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

示例 1：

输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3


限制：
2 <= n <= 100000
*
* */

/*
 * 下面解法在原题基础上增加了一些难度，将所有重复的数字找出来，返回重复数字的数组
 * */

/*
 * 测试程序
 * */
function test(func) {
    const input = [2, 3, 1, 0, 2, 5, 3];
    // const input = [3, 4, 2, 0, 0, 1];
    const output = [2, 3];
    const res = func(input);
    console.log('res', res);
    if (output.length !== res.length) return console.error('length different');
    const isFailed = res.some((item, index) => {
        if (item === output[index]) return false;
        const error = {
            item,
            input,
            output,
            res,
        };
        console.error(error);
        return true;
    });
    if (isFailed) {
        console.error('failed');
    } else {
        console.log('pass');
    }
}

/*
 * 排序后遍历，使用一个变量标记来记录一个元素，初始值为数组第一个元素，
 * 每次遍历中将当前遍历的元素与标记元素比较，若相等则重复，添加到Set中去重，若不相等则将当前遍历的值赋值给标记变量。
 * */
function findRepeatNumber1(nums) {
    const sortArr = nums.sort();
    const repeatSet = new Set();
    let currentNumber;
    sortArr.forEach((item) => {
        if (currentNumber === item) {
            repeatSet.add(item);
        } else {
            currentNumber = item;
        }
    });
    return Array.from(repeatSet);
}

/*
 * 遍历数组，使用一个哈希表来记录数组中元素出现的次数，key为数组元素，value为出现次数，当且仅当出现次数为2时将该元素添加到作为返回值的重复数组中。
 * */
function findRepeatNumber2(nums) {
    const numberHash = {};
    const repeatArr = [];
    nums.forEach((item) => {
        if (!numberHash[item]) {
            numberHash[item] = 1;
        } else {
            numberHash[item]++;
            numberHash[item] === 2 && repeatArr.push(item);
        }
    });
    return repeatArr;
}

/**
 * @description 遍历数组，下标为i，元素值为m，
 *              首先比较i是否等于m，若相等，说明它在正确的位置上，则继续扫描下一个数字，
 *              若不相等，则将下标为i和下标为m的元素进行比较，如果两者相同则出现了重复的数字，添加到重复数组中，继续扫描下一个数字，
 *              如果不相同则交换它们的位置，元素m即被放置到了属于它的位置，
 *              交换后，继续比较交换后的下标i对应的元素m与下标为m的元素，也就是重复一开始的过程，
 *              直到我们发现一个重复的数字或该元素在正确的位置上则继续扫描下一个数字。
 * @param {number[]} nums
 * @return {number}
 */
function findRepeatNumber3(nums) {
    const repeatSet = new Set();
    // 交换两个数组元素
    const exchangeItem = (index1, index2) => {
        const temp = nums[index2];
        nums[index2] = nums[index1];
        nums[index1] = temp;
    };

    // 当在正确的位置上或找到了重复的数字时返回true,可扫描数组的下一个元素
    const isDone = (m, i) => {
        // 在正确的位置上
        if (m === i) return true;
        // 找到了重复的数字
        if (m === nums[m]) {
            repeatSet.add(m);
            return true;
        }
        return false;
    };

    const find = (m, i) => {
        if (isDone(m, i)) return;

        // m不等于下标为m的元素，则交换
        exchangeItem(m, i);
        find(nums[i], i);
    };

    nums.forEach(find);

    return repeatSet.values().next().value;
}

// test(findRepeatNumber1);
// test(findRepeatNumber2);
test(findRepeatNumber3);
