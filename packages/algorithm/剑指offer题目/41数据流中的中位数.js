/**
 * 
 * 如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。

例如，

[2,3,4] 的中位数是 3

[2,3] 的中位数是 (2 + 3) / 2 = 2.5

设计一个支持以下两种操作的数据结构：

void addNum(int num) - 从数据流中添加一个整数到数据结构中。
double findMedian() - 返回目前所有元素的中位数。
示例 1：

输入：
["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]
[[],[1],[2],[],[3],[]]
输出：[null,null,null,1.50000,null,2.00000]
示例 2：

输入：
["MedianFinder","addNum","findMedian","addNum","findMedian"]
[[],[2],[],[3],[]]
输出：[null,null,2.00000,null,2.50000]

 * 
 */

/**
 * initialize your data structure here.
 * @description 获取中间数时进行排序再获取中间下标的值。
 */
var MedianFinder = function() {
    this.nums = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.nums.push(num)

};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (!this.nums.length) return null
    this.nums.sort((a, b) => a - b)
    const len = this.nums.length
    if (len % 2 === 0) {
        return (this.nums[len / 2] + this.nums[len / 2 - 1]) / 2
    } else {
        return this.nums[(len - 1) / 2]
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */


/**
 * @description 通过二分查找的方式插入新数，这样可以保证数组是排序的，
 * 且在查找中位数时不需要排序，可以在O(1)的时间复杂度下找到中位数。
 * 
 */
class MedianFinder2 {
    nums = []

    /**
     * 
     * @param {number} num 
     */
    addNum(num) {
        if (!this.nums.length) {
            this.nums.push(num);
            return
        }
        let start = 0;
        let end = this.nums.length - 1

        while (start < end) {
            const midIndex = (end - start >> 1) + start
            const midNum = this.nums[midIndex]

            if (num < midNum) {
                end = midIndex - 1
            } else if (num > midNum) {
                start = midIndex + 1
            } else {
                start = midIndex
                break
            }
        }

        if (this.nums[start] - num > 0) {
            this.nums.splice(start, 0, num)
        } else {
            this.nums.splice(start + 1, 0, num)
        }

    }

    /**
     * 
     * @returns {number}
     */
    findMedian() {
        if (this.nums.length === 0) return null
        const mid = this.nums.length >> 1
        if (this.nums.length % 2 === 0) {
            return (this.nums[mid] + this.nums[mid - 1]) / 2
        } else {
            return this.nums[mid]
        }
    }
}


class Heap {
    nums = []
    compare
    constructor(compare) {
        this.compare = compare
    }

    get length() {
        return this.nums.length
    }

    insert(num) {

    }

    /**
     * @return {number}
     */
    extract() {

    }

    /**
     * @return {number}
     */
    top() {

    }
}

class MinHeap extends Heap {
    constructor() {
        super((a, b) => a - b)
    }
}

class MaxHeap extends Heap {
    constructor() {
        super((a, b) => b - a)
    }
}

/**
 * @description 用一个最小堆和一个最大堆将数据流中的数据分两部分存储。
 * 左半部分用最大堆，右半部分用最小堆存储，且左半部分的值一定小于或等于右半部分的最小值。
 * 同时要保证两个堆的元素个数相等或左半部分比右半部分多1（反过来也行，但要保证统一哪边可能会多1）。
 * 插入数据时，根据两个堆的数量决定这次要在哪个堆中插入数据，
 * 哪边少插哪边，
 * 如果俩个堆数量相等，则插入左边的最大堆。
 * 此外，插入时需要先比较这个数是否比最小堆的最小数还要大，
 * 如果是则将最小堆的数取出并插入到最大堆，再将该数插入最小堆，
 * 如果比最小堆的最小数还要小，则可直接插入到最大堆中。
 * 
 * 取中间数时，如果两个堆数量不一致，则取左边的最大堆的堆顶元素（哪边多取哪边），
 * 如果两个堆的数量相同，则各取两个堆的堆顶元素相加取平均值。
 */
class MedianFinder3 {
    minHeap = new MinHeap()
    maxHeap = new MaxHeap()

    addNum(num) {
        if (this.maxHeap.length <= this.minHeap.length) {
            if (num > this.minHeap.top()) {
                this.maxHeap.insert(this.minHeap.extract())
                this.minHeap.insert(num)
            } else {
                this.maxHeap.insert(num)
            }
        } else {
            if (num < this.maxHeap.top()) {
                this.minHeap.insert(this.maxHeap.extract())
                this.maxHeap.insert(num)
            } else {
                this.minHeap.insert(num)
            }
        }

    }

    findMedian() {
        if (this.minHeap.length === this.maxHeap.length) {
            return (this.minHeap.top() + this.maxHeap.top()) / 2
        } else {
            return this.maxHeap.top()
        }

    }

}





























function test(MedianFinder) {
    const testArr = [{
            ins: ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"],
            input: [
                [],
                [1],
                [2],
                [],
                [3],
                []
            ],
            output: [null, null, null, 1.50000, null, 2.00000]
        },
        {
            ins: ["MedianFinder", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian"],
            input: [
                [],
                [12],
                [],
                [10],
                [],
                [13],
                [],
                [11],
                [],
                [5],
                [],
                [15],
                [],
                [1],
                [],
                [11],
                [],
                [6],
                [],
                [17],
                [],
                [14],
                [],
                [8],
                [],
                [17],
                [],
                [6],
                [],
                [4],
                [],
                [16],
                [],
                [8],
                [],
                [10],
                [],
                [2],
                [],
                [12],
                [],
                [0],
                []
            ],
            output: [null, null, 12.0, null, 11.0, null, 12.0, null, 11.5, null, 11.0, null, 11.5, null, 11.0, null, 11.0, null, 11.0, null, 11.0, null, 11.0, null, 11.0, null, 11.0, null, 11.0, null, 11.0, null, 11.0, null, 11.0, null, 10.5, null, 10.0, null, 10.5, null, 10.0]
        },

    ].slice(1)




    let medianFinder = null

    const insMap = {
        'MedianFinder': () => {
            medianFinder = new MedianFinder()
            return null
        },
        "addNum": (num) => {
            medianFinder.addNum(num)
            return null
        },
        "findMedian": () => {
            return medianFinder.findMedian()
        }
    }



    testArr.forEach((item, index) => {
        console.log(`test ${index+1}, ${JSON.stringify(item)}`);
        const res = []
        item.ins.forEach((i, index) => {
            res.push(insMap[i](item.input[index][0]))
        })
        console.log('res', res);
        const isFail = res.some((i, index) => i !== item.output[index])
        console.log(isFail ? 'fail' : 'pass');
    })
}

test(MedianFinder2)