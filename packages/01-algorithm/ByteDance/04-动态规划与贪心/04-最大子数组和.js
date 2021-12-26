// https://leetcode-cn.com/explore/featured/card/bytedance/246/dynamic-programming-or-greedy/1029/

/*
 *给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

子数组 是数组中的一个连续部分。



示例 1：

输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
示例 2：

输入：nums = [1]
输出：1
示例 3：

输入：nums = [5,4,-1,7,8]
输出：23


提示：

1 <= nums.length <= 105
-104 <= nums[i] <= 104


进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。
 * */

let maxSubArray = function (nums) {
    let max = nums[0];
    nums.reduce((count, num) => {
        count += num;
        if (count > max) max = count;
        if (count < 0) count = 0;
        return count;
    }, 0);
    return max;
};

console.log(maxSubArray([-2, -1, -3]));
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-1, 1, 2, 1]));

/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray2 = function (nums) {
    /*
     * dp[i] = max(nums[i] + dp[i-1], num[i])
     * */

    let preMax = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const current = Math.max(preMax + nums[i], nums[i]);

        if (current > max) {
            max = current;
        }

        preMax = current;
    }

    return max;
};

console.log(maxSubArray2([-2, -1, -3]));
console.log(maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray2([-1, 1, 2, 1]));
