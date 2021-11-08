/**
 * 
 * 输入一个递增排序的数组和一个数字s，在数组中查找两个数，
 * 使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。

 

示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[2,7] 或者 [7,2]
示例 2：

输入：nums = [10,26,30,31,47,60], target = 40
输出：[10,30] 或者 [30,10]
 

限制：

1 <= nums.length <= 10^5
1 <= nums[i] <= 10^6

 * 
 */


/**
 * @description 用两个指针ahead和behind分别指向数组的
 * 头和尾，
 * 然后两个指针指向的数相加，
 * 如果小于s，则将ahaed向后移一位（变大），
 * 如果大于s，则将behind向前移动一位（变小），
 * 如果等于s，则符合条件，输出两个指针指向的数，
 * 循环该过程，直到找到符合条件的或者ahaed>=behind。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    if (!nums || !nums.length || nums.length < 2) throw new Error('nums is error input ')
    let ahead = 0;
    let behind = nums.length - 1
    while (ahead < behind) {
        const sum = nums[ahead] + nums[behind]
        if (sum === target) { return [nums[ahead], nums[behind]] }
        sum < target ? ahead++ : behind--
    }

    return []
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 7, 11, 15], 9));
// git config --global http.proxy 127.0.0.1:1080