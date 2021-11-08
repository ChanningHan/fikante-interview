/*
 *
 *在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。
 输入一个数组，求出这个数组中的逆序对的总数。



示例 1:

输入: [7,5,6,4]
输出: 5


限制：

0 <= 数组长度 <= 50000

 *
 * */

/**
 * @description 基于归并排序，只需要在某个条件下添加一行即可
 * @param {number[]} nums
 * @return {number}
 */
let reversePairs = function(nums) {
    if (!nums || !nums.length || nums.length === 1) return 0;

    let count = 0;

    function merge(left, right) {
        // 左0右1时
        if (!left.length) {
            return right;
        }

        const res = [];

        for (let i = 0, pLeft = 0, pRight = 0; i < left.length + right.length; i++) {
            if (pRight >= right.length || left[pLeft] <= right[pRight]) {
                res[i] = left[pLeft++];
            } else if (pLeft >= left.length) {
                res[i] = right[pRight++];
            } else if (left[pLeft] > right[pRight]) {
                count += left.length - pLeft;
                res[i] = right[pRight++];
            }
        }

        return res;
    }

    function mergeSort(nums) {
        debugger;
        if (nums.length <= 1) {
            return nums;
        }
        const mid = nums.length >> 1;
        const left = mergeSort(nums.slice(0, mid));
        const right = mergeSort(nums.slice(mid));
        return merge(left, right);
    }

    mergeSort(nums);
    return count;
};

// reversePairs([7, 5, 6, 4]);
reversePairs([1, 3, 2, 3, 1]);