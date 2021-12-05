/**
 *
 * 请定义一个队列并实现函数 max_value 得到队列里的最大值，
 * 要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。

若队列为空，pop_front 和 max_value需要返回 -1

示例 1：

输入:
["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
[[],[1],[2],[],[],[]]
输出:[null,null,null,2,1,2]
示例 2：

输入:
["MaxQueue","pop_front","max_value"]
[[],[],[]]
输出:[null,-1,-1]


限制：

1 <= push_back,pop_front,max_value的总操作数<= 10000
1 <= value <= 10^5

 *
 */

let MaxQueue = function () {
    this.deque = [];
    this.queue = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
    return this.deque.length ? this.deque[0] : -1;
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
    this.queue.push(value);
    while (this.deque.length && this.deque[this.deque.length - 1] < value) {
        this.deque.pop();
    }
    this.deque.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
    if (!this.queue.length) return -1;
    if (this.deque[0] === this.queue[0]) {
        this.deque.shift();
    }
    return this.queue.shift();
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
