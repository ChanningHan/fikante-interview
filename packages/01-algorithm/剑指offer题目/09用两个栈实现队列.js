/**
 * 
 * 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，
 * 分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
示例 1：

输入：
["CQueue","appendTail","deleteHead","deleteHead"]
[[],[3],[],[]]
输出：[null,null,3,-1]
示例 2：

输入：
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]
输出：[null,-1,null,null,5,2]
提示：

1 <= values <= 10000
最多会对 appendTail、deleteHead 进行 10000 次调用

 */


/**
 * @decription 添加时插入到栈1，删除时将栈1逐个弹出到栈2，这样栈2的栈顶即队列的队头，
 * 此时将栈2的栈顶弹出即可完成删除。
 * 插入新元素时依然插入到栈1中。当栈2不为空时，每次删除都从栈2弹出，
 * 当栈2为空时，再将栈1逐个推出到栈2，如果栈1也为空，则删除失败，返回-1；
 */
var CQueue = function() {
    this.stack1 = []
    this.stack2 = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stack1.push(value)
    return null
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if (!this.stack2.length) {
        while (this.stack1.length) {
            this.stack2.push(this.stack1.pop())
        }
    }

    if (!this.stack2.length) {
        return -1
    }

    return this.stack2.pop()

};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

function test() {
    const obj = new CQueue()

    const methods = ["appendTail", "deleteHead", "deleteHead"]
    const params = [
        [3],
        [],
        []
    ]

    const output = [null, null, 3, -1]

    const res = [null]

    methods.forEach((method, index) => {
        res.push(obj[method](params[index][0]))
    })
    isPass = !res.some((item, index) => item !== output[index])
    console.log(res);
    console.log(isPass ? 'pass' : 'failed')
}

test()



/**
 * 用两个队列实现栈：
 * 插入时，若两个队列都为空，则任意插入其中一个，后续插入时插入到不为空的那个队列中。
 * 删除时，将不为空的队列逐个推出到另一个空队列中，直到剩最后一个，此时将它推出并不入队列即完成删除。
 * 总结：始终保留至少一个空队列，每次添加时往不为空的队列入列，每次删除元素时将一个不为空的队列往空队列里面推，推剩一个完成删除/就是两个队列反复倒腾。
 */