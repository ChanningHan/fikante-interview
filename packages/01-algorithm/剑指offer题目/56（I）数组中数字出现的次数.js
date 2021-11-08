/*
 *
 * 一个整型数组 nums 里除两个数字之外，
 * 其他数字都出现了两次。请写程序找出这两个只出现一次的数字。
 * 要求时间复杂度是O(n)，空间复杂度是O(1)。



示例 1：

输入：nums = [4,1,4,6]
输出：[1,6] 或 [6,1]
示例 2：

输入：nums = [1,2,10,4,1,4,3,3]
输出：[2,10] 或 [10,2]


限制：

2 <= nums.length <= 10000

 *
 * */

/**
 * @description 先解决找到只有一个只出现一次的数字的问题：
 * 遍历数组，用0开始异或每一个数字，
 * 由于两个相同的数字异或会互相抵消为0，因此结果就是只出现一次的那个数字。
 * 接下来就是想办法将数组拆分成两个，
 * 由于这两个数字不相同，因此他们两个的异或结果的二进制表示中必然有1，
 * 从左边或右边(我们从右边开始更方便，因为JS中toString转2进制的长度不固定)开始数找出第一个1的下标位置，
 * 接着根据这个位置将这个数组分成两部分：该下标为1的一组，不为1的一组，
 * 然后对这两组分别求只出现一次的数字即可。
 * @param {number[]} nums
 * @return {number[]}
 */
function singleNumbers(nums) {
    if (!nums || !nums.length) throw new Error('nums is empty');
    let XORRes = 0;
    nums.forEach((item) => {
        XORRes ^= item;
    });

    // 从右往左第一个1的位置
    let first1Index = -1;
    XORRes = XORRes.toString(2);
    for (let i = XORRes.length - 1; i >= 0; i--) {
        if (XORRes[i] === '1') {
            first1Index = XORRes.length - 1 - i;
            break;
        }
    }

    // 根据firstIndex位置是否为1来对两个XORRes变量进行异或
    let XORRes1 = 0;
    let XORRes2 = 0;
    for (let i = 0; i < nums.length; i++) {
        const binaryNum = nums[i].toString(2);
        const reverseIndex = binaryNum.length - 1 - first1Index;
        if (
            reverseIndex >= 0 &&
            reverseIndex < binaryNum.length &&
            binaryNum[binaryNum.length - 1 - first1Index] === '1'
        ) {
            XORRes1 ^= nums[i];
        } else {
            XORRes2 ^= nums[i];
        }
    }
    return [XORRes1, XORRes2];
}