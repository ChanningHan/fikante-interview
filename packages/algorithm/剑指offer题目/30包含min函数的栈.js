/*
*1111
* 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，
调用 min、push 及 pop 的时间复杂度都是 O(1)。

示例:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.min();   --> 返回 -2.


提示：

各函数的调用总次数不超过 20000 次

*
* */

/*
 * 解题思路，用一个辅助栈，当入栈一个元素时，判断是否是最小元素，如果是则入栈，如果不是则入栈一个值等于最小值的新元素。
 * 辅助栈与栈同时出栈。
 *
 * */
/**
 * initialize your data structure here.
 */
const MinStack = function() {
    // 主栈
    this.stack = [];
    // 辅助栈
    this.assistStack = [];
    // 最小值
    this.minValue = undefined;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (x === undefined) return;
    this.stack.push(x);

    if (!this.assistStack.length) {
        this.assistStack.push(x);
        return;
    }

    this.minValue = this.assistStack[this.assistStack.length - 1];
    this.assistStack.push(x > this.minValue ? this.minValue : x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.assistStack.pop();
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.length ? this.stack[this.stack.length - 1] : null;
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    if (!this.assistStack.length) return null;
    return this.assistStack[this.assistStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */

function test() {
    const stack = new MinStack();
    console.log(stack);
    stack.push(-2);
    stack.push(0);
    stack.push(-3);
    console.log('min', stack.min());
    stack.pop();
    console.log('top', stack.top());
    console.log('min', stack.min());
}

test();