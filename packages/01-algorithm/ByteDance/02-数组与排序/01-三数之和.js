// https://leetcode-cn.com/problems/3sum/
/*
 *
 *给你一个包含 n 个整数的数组nums，判断nums中是否存在三个元素 a，b，c ，使得a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。



示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
示例 2：

输入：nums = []
输出：[]
示例 3：

输入：nums = [0]
输出：[]


提示：

0 <= nums.length <= 3000
-105 <= nums[i] <= 105

 *
 * */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let threeSum = function (nums) {
    if (!nums || !nums.length || nums.length < 3) return [];
    /*
     * 排序+双指针
     * */
    nums.sort((a, b) => a - b);

    if (nums[0] > 0) return [];

    const res = [];

    let i = 0;
    while (i < nums.length - 2) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const pointSum = nums[left] + nums[right];
            if (-nums[i] === pointSum) {
                res.push([nums[i], nums[left], nums[right]]);
                const leftNum = nums[left];
                const rightNum = nums[right];
                while (left < right) {
                    left++;
                    if (nums[left] !== leftNum) break;
                }
                while (left < right) {
                    right--;
                    if (nums[right] !== rightNum) break;
                }
            } else if (pointSum < -nums[i]) {
                const leftNum = nums[left];
                while (left < right) {
                    left++;
                    if (nums[left] !== leftNum) break;
                }
            } else {
                const rightNum = nums[right];
                while (left < right) {
                    right--;
                    if (nums[right] !== rightNum) break;
                }
            }
        }

        const currentNum = nums[i];
        while (i < nums.length - 2) {
            i++;
            if (nums[i] !== currentNum) break;
        }
    }

    return res;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([-2, -5, 5, -7, 8, 4, 1, 9, -2, -1]));
const arr = [-2, -5, 5, -7, 8, 4, 1, 9, -2, -1];
console.log(arr.sort((a, b) => a - b));
