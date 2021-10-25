/**
 * 
 * 输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。



示例 1:

输入: [10,2]
输出: "102"
示例2:

输入: [3,30,34,5,9]
输出: "3033459"


提示:

0 < nums.length <= 100
说明:

输出结果可能非常大，所以你需要返回一个字符串而不是整数
拼接起来的数字可能会有前导 0，最后结果不需要去掉前导 0

 * 
 */

/**
 * @description 定义compare中两个数m、n的大小关系: 如果mn<nm，则 定义m小于n，m应该排在n前面
 * @param {number[]} nums
 * @return {string}
 */
let minNumber = function (nums) {
    return nums.sort((a, b) => (`${a}${b}` > `${b}${a}` ? 1 : -1)).join('');
};

console.log(minNumber([3, 30, 34, 5, 9]));
