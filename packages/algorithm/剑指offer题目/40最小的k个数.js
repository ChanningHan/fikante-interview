/**
 * 
 * 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

 

示例 1：

输入：arr = [3,2,1], k = 2
输出：[1,2] 或者 [2,1]
示例 2：

输入：arr = [0,1,2,1], k = 1
输出：[0]
 

限制：

0 <= k <= arr.length <= 10000
0 <= arr[i] <= 10000

 * 
 */


function test(fn) {
    const testArr = [{
            arr: [3, 2, 1],
            k: 2,
            output: [1, 2]
        },
        {
            arr: [0, 1, 2, 1],
            k: 1,
            output: [0]
        },
        {
            arr: [0, 1, 1, 1, 4, 5, 3, 7, 7, 8, 10, 2, 7, 8, 0, 5, 2, 16, 12, 1, 19, 15, 5, 18, 2, 2, 22, 15, 8, 22, 17, 6, 22, 6, 22, 26, 32, 8, 10, 11, 2, 26, 9, 12, 9, 7, 28, 33, 20, 7, 2, 17, 44, 3, 52, 27, 2, 23, 19, 56, 56, 58, 36, 31, 1, 19, 19, 6, 65, 49, 27, 63, 29, 1, 69, 47, 56, 61, 40, 43, 10, 71, 60, 66, 42, 44, 10, 12, 83, 69, 73, 2, 65, 93, 92, 47, 35, 39, 13, 75],
            k: 75,
            output: [
                0, 1, 1, 1, 4, 5, 3, 7, 7, 2, 7, 0,
                5, 2, 1, 5, 2, 2, 6, 6, 2, 7, 7, 2,
                3, 2, 1, 6, 1, 2, 8, 8, 8, 9, 9, 8,
                10, 22, 10, 11, 10, 10, 12, 13, 12, 12, 15, 18,
                17, 16, 15, 17, 19, 23, 19, 22, 19, 19, 20, 22,
                22, 26, 31, 39, 27, 29, 32, 40, 26, 36, 27, 28,
                35, 33, 42
            ]
        }
    ]

    testArr.forEach((item, index) => {
        console.log(`test${index+1},${JSON.stringify(item)}`);
        const res = fn(item.arr, item.k)
        console.log('res', res)
        const isFail = res.some(i => {
            return !item.output.includes(i)
        })
        console.log(isFail ? 'fail' : 'pass');
    })
}

/**
 * @description 使用快速排序中的partition函数进行分组。
 * 当进行partition后返回的index刚好等于k-1时，则此时左边的k个数即是最小的
 * 四个数，但不保证排序。
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    if (!arr.length || !k) return []
    if (k > arr.length) throw new Error('k is larger than arr.length')

    function swap(arr, i, j) {
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    function partition(arr, start, end) {
        console.log('start', start);
        console.log('end', end);
        console.log('');
        const randomIndex = Math.floor(Math.random() * (end - start + 1) + start)
        swap(arr, randomIndex, end)

        let firstLargeIndex = start - 1


        for (let i = start; i < end; i++) {
            if (arr[i] >= arr[end]) {
                if (firstLargeIndex < start) {
                    firstLargeIndex = i
                }
            } else if (firstLargeIndex >= start) {
                swap(arr, firstLargeIndex, i)
                firstLargeIndex++
            }
        }

        firstLargeIndex >= start && swap(arr, firstLargeIndex, end)

        return firstLargeIndex < start ? start : firstLargeIndex

    }

    let start = 0;
    let end = arr.length - 1
    let index = partition(arr, start, end)
    while (index !== k - 1) {
        if (index < k - 1) {
            start = index + 1
            index = partition(arr, start, end)
        } else {
            end = index - 1
            index = partition(arr, start, end)
        }
    }

    return arr.slice(0, index + 1)
};

test(getLeastNumbers)