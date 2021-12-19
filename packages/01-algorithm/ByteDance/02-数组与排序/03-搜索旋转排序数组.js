// https://leetcode-cn.com/explore/featured/card/bytedance/243/array-and-sorting/1017/

/*
*
* 整数数组 nums 按升序排列，数组中的值 互不相同 。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。



示例 1：

输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4
示例 2：

输入：nums = [4,5,6,7,0,1,2], target = 3
输出：-1
示例 3：

输入：nums = [1], target = 0
输出：-1


提示：

1 <= nums.length <= 5000
-10^4 <= nums[i] <= 10^4
nums 中的每个值都 独一无二
题目数据保证 nums 在预先未知的某个下标上进行了旋转
-10^4 <= target <= 10^4


进阶：你可以设计一个时间复杂度为 O(log n) 的解决方案吗？
* */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let search = function (nums, target) {
    /*
     * 通过二分查找先找到旋转数组的分割点。
     * 比较target与两个分割数组的最小值，决定在哪个数组中进行搜索。
     * 搜索时使用二分查找。
     * */

    let splitIndex = 0;
    function findSplitIndex(startIndex, endIndex) {
        if (startIndex > endIndex) {
            return;
        }

        const midIndex = (startIndex + endIndex) >> 1;
        if (nums[midIndex + 1] < nums[midIndex]) {
            splitIndex = midIndex + 1;
        }
        if (nums[midIndex - 1] > nums[midIndex]) {
            splitIndex = midIndex;
        }

        if (nums[midIndex] < nums[0]) {
            findSplitIndex(startIndex, midIndex - 1);
        } else {
            findSplitIndex(midIndex + 1, endIndex);
        }
    }

    findSplitIndex(0, nums.length - 1);

    if (target < nums[splitIndex] || (splitIndex && target > nums[splitIndex - 1])) {
        return -1;
    }

    let targetIndex = -1;
    function findTarget(startIndex, endIndex) {
        if (startIndex > endIndex) return;

        const midIndex = (startIndex + endIndex) >> 1;

        if (target === nums[midIndex]) {
            targetIndex = midIndex;
            return;
        }

        if (target > nums[midIndex]) {
            findTarget(midIndex + 1, endIndex);
        } else {
            findTarget(startIndex, midIndex - 1);
        }
    }

    // right
    if (target <= nums[nums.length - 1] && target >= nums[splitIndex]) {
        findTarget(splitIndex, nums.length - 1);
    } else if (splitIndex && target <= nums[splitIndex - 1] && target >= nums[0]) {
        findTarget(0, splitIndex - 1);
    }

    return targetIndex;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search2(nums, target) {
    /*
     * 二分查找.
     * mid左右一定有一边是排序的
     * */

    let startIndex = 0;
    let endIndex = nums.length - 1;

    while (startIndex <= endIndex) {
        const midIndex = (startIndex + endIndex) >> 1;
        if (target === nums[midIndex]) return midIndex;

        if (nums[0] <= nums[midIndex]) {
            if (target >= nums[startIndex] && target < nums[midIndex]) {
                endIndex = midIndex - 1;
            } else {
                startIndex = midIndex + 1;
            }
        } else if (target > nums[midIndex] && target <= nums[endIndex]) {
            startIndex = midIndex + 1;
        } else {
            endIndex = midIndex - 1;
        }
    }
    return -1;
}

console.log(search([4, 5, 6, 7, 8, 9, 12, 0, 1, 2, 3], 2));
console.log(search2([4, 5, 6, 7, 8, 9, 12, 0, 1, 2, 3], 2));
console.log(search2([1, 3], 3));
console.log(search2([3, 1], 1));
