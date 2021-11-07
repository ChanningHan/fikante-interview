/*
 *
 *一个长度为n-1的递增排序数组中的所有数字都是唯一的，
 并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。



示例 1:

输入: [0,1,3]
输出: 2
示例2:

输入: [0,1,2,3,4,5,6,7,9]
输出: 8


限制：

1 <= 数组长度 <= 10000

 *
 * */

/**
 * @description 二分查找。
 * 如果中间元素大于下标，则看前一个元素是否等于其下标，若不是则找左半边，因为其右边肯定都比下标大。
 * 如果中间元素小于下标，则看前一个元素是否等于其下标，如果不是找左半边。
 * 如果中间元素等于其下标，则其左边必定也是都等于其下标，因此找右半边。
 * @param {number[]} nums
 * @return {number}
 */
let missingNumber = function(nums) {
    if (!nums || !nums.length) return 0;

    function findMissingNumber(start, end) {
        if (start > end) return start;
        const mid = ((end - start) >> 1) + start;
        if (nums[mid] !== mid) {
            if (mid <= 0 || nums[mid - 1] === mid - 1) {
                return mid;
            }
            return findMissingNumber(start, mid - 1);
        }
        return findMissingNumber(mid + 1, end);
    }

    return findMissingNumber(0, nums.length - 1);
};