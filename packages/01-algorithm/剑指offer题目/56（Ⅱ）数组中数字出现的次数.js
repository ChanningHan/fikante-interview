/**
 * 
 * 在一个数组 nums 中除一个数字只出现一次之外，
 * 其他数字都出现了三次。请找出那个只出现一次的数字。

 

示例 1：

输入：nums = [3,4,3,3]
输出：4
示例 2：

输入：nums = [9,1,7,9,7,9,7]
输出：1
 

限制：

1 <= nums.length <= 10000
1 <= nums[i] < 2^31

 * 
 */

/**
 * @description 将所有的二进制表示上的1累加，
 * 由于出现3次的数字中的1必然是3的倍数，将最后的结果中
 * 的每一位都对3取模，如果为1则这是只出现一次的数字的二进制表示上的1。
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
    if (!nums || !nums.length) throw new Error('nums is empty')
    let binarySum = []
    for (let i = 0; i < nums.length; i++) {
        const numStr = nums[i].toString(2)
        for (let j = numStr.length - 1; j >= 0; j--) {
            const index = numStr.length - 1 - j
            if (binarySum[index] === undefined) binarySum[index] = 0
            binarySum[index] += ~~numStr[j]
        }
    }
    for (let i = 0; i < binarySum.length; i++) {
        if (binarySum[i] === undefined) {
            binarySum[i] = 0
        }
        binarySum[i] = binarySum[i] % 3
    }

    const res = parseInt(binarySum.reverse().join(''), 2)

    return res
};

singleNumber([3, 4, 3, 3])
singleNumber([9, 1, 7, 9, 7, 9, 7])