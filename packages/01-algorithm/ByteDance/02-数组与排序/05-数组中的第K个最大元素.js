// https://leetcode-cn.com/explore/featured/card/bytedance/243/array-and-sorting/1018/

/*
*
* 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。



示例 1:

输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
示例 2:

输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4


提示：

1 <= k <= nums.length <= 104
-104 <= nums[i] <= 104
*
* */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let findKthLargest = function (nums, k) {
    /*
     * 利用快排的变体。
     * */

    function getRandom(start, end) {
        return ~~(Math.random() * (end - start + 1) + start);
    }

    function swap(nums, i, j) {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    function partition(start, end) {
        const random = getRandom(start, end);
        const randomNumber = nums[random];
        swap(nums, random, end);
        let largeIndex = -1;
        for (let i = start; i < end; i++) {
            if (nums[i] >= randomNumber) {
                if (largeIndex === -1) {
                    largeIndex = i;
                }
            } else if (largeIndex > -1) {
                swap(nums, largeIndex, i);
                largeIndex++;
            }
        }

        if (largeIndex > -1) swap(nums, largeIndex, end);
        return largeIndex > -1 ? largeIndex : end;
    }

    let start = 0;
    let end = nums.length - 1;
    let index = partition(start, end);

    while (index !== nums.length - k) {
        if (index < nums.length - k) {
            start = index + 1;
        } else {
            end = index - 1;
        }
        index = partition(start, end);
    }

    return nums[index];
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
