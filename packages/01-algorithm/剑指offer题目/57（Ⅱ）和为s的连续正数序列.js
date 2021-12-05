/**
 *
 * 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。



示例 1：

输入：target = 9
输出：[[2,3,4],[4,5]]
示例 2：

输入：target = 15
输出：[[1,2,3,4,5],[4,5,6],[7,8]]


限制：

1 <= target <= 10^5

 *
 */

/**
 * @description 使用两个指针，
 * 先分别指向数组第一个和第二个数，
 * 然后比较两个指针之间的和与s，
 * 如果比s小，则第二个指针往后移，
 * 再次判断，
 * 如果比s大，则第一个指针往后移，
 * 如果与s相等，则将两个指针之间的数记录为结果数组的元素，
 * 直到两个指针指向同一个数，则说明后面不会再有符合条件的情况，
 * 退出循环，返回结果。
 * @param {number} target
 * @return {number[][]}
 */
function findContinuousSequence(target) {
    const res = [];
    let p1 = 1;
    let p2 = 2;

    function createArr(p1, p2) {
        const arr = [];
        for (let i = p1; i <= p2; i++) {
            arr.push(i);
        }
        return arr;
    }

    let sum = p1 + p2;
    while (p1 < p2) {
        if (sum < target) {
            p2++;
            sum += p2;
        } else if (sum > target) {
            sum -= p1;
            p1++;
        } else {
            res.push(createArr(p1, p2));
            sum -= p1;
            p1++;
            p2++;
            sum += p2;
        }
    }

    return res;
}

findContinuousSequence(15);
