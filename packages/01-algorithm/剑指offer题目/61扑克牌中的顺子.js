/**
 *
 * 从若干副扑克牌中随机抽 5 张牌，判断是不是一个顺子，
 * 即这5张牌是不是连续的。2～10为数字本身，
 * A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。



示例1:

输入: [1,2,3,4,5]
输出: True


示例2:

输入: [0,0,1,2,5]
输出: True


限制：

数组长度为 5

数组的数取值为 [0, 13] .

 *
 */

/**
 * @description 使用一个长度为14的哈希表来完成五张牌的排序，
 * 下标为牌的大小，key为牌的大小，value为次数，
 * 0为大小王。
 * 且填入哈希表时记录除0外的最小值min。
 * 除0外value>1时直接返回false，因为顺子中不可能有对子。
 * 从最小值min开始遍历，统计从min到min+4之间有几个数字对应的value为0，
 * 意味着需要几个0来补充，
 * 如果空位数empty大于0的个数则不符合顺子条件。
 *
 * @param {number[]} nums
 * @return {boolean}
 */
function isStraight(nums) {
    const hashSet = [];
    for (let i = 0; i <= 13; i++) {
        hashSet[i] = 0;
    }

    let min;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] && hashSet[nums[i]]) return false;

        if (nums[i] && (!min || nums[i] < min)) {
            min = nums[i];
        }

        hashSet[nums[i]]++;
    }

    // 说明是五个0，必然符合顺子条件
    if (!min) return true;

    for (let i = min + 1; i <= min + 4; i++) {
        !hashSet[i] && hashSet[0]--;
        // 大小王不够用了。
        if (hashSet[0] < 0) return false;
    }

    return true;
}
