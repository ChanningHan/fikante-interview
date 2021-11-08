/**
 * 
 * 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

示例:

输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7] 
解释: 

  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
 

提示：

你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。

 * 
 */


/**
 * @description 用一个两端开口的队列存放数字的下标，
 * 每次遍历一个数字时，将队列中的比它小的全部出列，再将这个数字的下标入列，
 * 如此列头总是该窗口的最大值，
 * 当遍历的下标与列头的下标之差大于窗口的大小时，将列头出列。
 * 每次遍历都将列头对应的值作为当前窗口的最大值输出到结果数组中。
 * 
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, k) {
    const deque = []
    const res = []
    for (let i = 0; i < nums.length; i++) {
        if (i - deque[0] > k - 1) deque.shift()
        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop()
        }
        deque.push(i)

        if (i >= k - 1) {
            res.push(nums[deque[0]])
        }
    }
    return res
};

maxSlidingWindows([1, 3, -1, -3, 5, 3, 6, 7], 3)
maxSlidingWindows([2, 3, 4, 2, 6, 2, 5, 1], 3)