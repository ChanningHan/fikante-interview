/**
 * 
 * 统计一个数字在排序数组中出现的次数。



示例 1:

输入: nums = [5,7,7,8,8,10], target = 8
输出: 2
示例2:

输入: nums = [5,7,7,8,8,10], target = 6
输出: 0


提示：

0 <= nums.length <= 105
-109<= nums[i]<= 109
nums是一个非递减数组
-109<= target<= 109

 * 
 */

/**
 * @description 二分查找法。
 * 找到这个数第一次出现的下标和最后一次出现的下标即可得到出现的次数。
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let search = function (nums, target) {
    if (!nums || !nums.length) return 0;

    function findFirst(start, end) {
        if (start >= nums.length || end < 0 || start > end) {
            return -1;
        }

        const mid = ((end - start) >> 1) + start;

        if (nums[mid] === target) {
            if (!mid || nums[mid - 1] !== target) {
                return mid;
            }
            return findFirst(start, mid - 1);
        }
        if (nums[mid] < target) {
            return findFirst(mid + 1, end);
        }
        if (nums[mid] > target) {
            return findFirst(start, mid - 1);
        }
    }

    function findLast(start, end) {
        if (start >= nums.length || end < 0 || start > end) {
            return -1;
        }

        const mid = ((end - start) >> 1) + start;

        if (nums[mid] === target) {
            if (mid >= target.length - 1 || nums[mid + 1] !== target) {
                return mid;
            }
            return findLast(mid + 1, end);
        }
        if (nums[mid] < target) {
            return findLast(mid + 1, end);
        }
        if (nums[mid] > target) {
            return findLast(start, mid - 1);
        }
    }

    const firstIndex = findFirst(0, nums.length - 1);
    if (firstIndex < 0) return 0;
    const lastIndex = findLast(0, nums.length - 1);
    return lastIndex - firstIndex + 1;
};

console.log(search([5, 7, 7, 8, 8, 10], 6));
