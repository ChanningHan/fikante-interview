/**
 * 
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。

 

示例：

输入：nums = [1,2,3,4]
输出：[1,3,2,4] 
注：[3,1,2,4] 也是正确的答案之一。
 

提示：

0 <= nums.length <= 50000
0 <= nums[i] <= 10000

 * 
 */

function test(fn) {
    const testArr = [{
        input: [1, 2, 3, 4],
        output: [1, 3, 2, 4]
    }]

    testArr.forEach((i, index) => {
        console.log(`test${index+1},testMsg:${JSON.stringify(i)}`);
        const res = fn(i.input)
        console.log(`res:${res}`)

        console.log(res.some((resItem, resIndex) => resItem !== i.output[resIndex]) ? 'fail' : 'pass')
    })
}

function isEven(num) {
    return num % 2 !== 0
}

/**
 * @description 两个指针，第一个指向头，第二个指向尾，第二个开始向前移动直到找到一个奇数，第一个开始移动，如果是偶数则交换第二个指针位置的数字，
 * 交换后第二个指针继续想前找到一个奇数，重复上面过程，直到第二个指针不在第一个指针后面为止。
 * @param {number[]} nums
 * @return {number[]}
 */
function exchange(nums) {
    if (nums.length === 0) return nums

    let pointer1 = 0
    let pointer2 = nums.length - 1

    while (pointer1 < pointer2) {
        while (!isEven(nums[pointer2]) && pointer2 >= 0) {
            pointer2--
        }
        while (isEven(nums[pointer1]) && pointer1 < nums.length) {
            pointer1++
        }
        if (pointer1 >= pointer2) {
            break
        }
        let temp = nums[pointer1]
        nums[pointer1] = nums[pointer2]
        nums[pointer2] = temp
    }

    return nums
};

test(exchange)