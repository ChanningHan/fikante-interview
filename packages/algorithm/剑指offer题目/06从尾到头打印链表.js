/*
 *
 *
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

示例 1：

输入：head = [1,3,2]
输出：[2,3,1]

限制：

0 <= 链表长度 <= 10000
 *
 * */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function test(reversePrint) {
    const input = [1, 3, 2];
    const head = new ListNode(input[0]);
    let current;
    current = new ListNode(input[1]);
    head.next = current;
    input.slice(2).forEach((item, index) => {
        const node = new ListNode(item);
        current.next = node;
        current = node;
    });

    const output = [2, 3, 1];
    const res = reversePrint(head);
    console.log(reversePrint.name);
    console.log('res', res);
    if (output.join('') === res.join('')) {
        console.log('pass');
    } else {
        console.log('failed');
    }
}

/**
 * @description 遍历时将值用unshift插入到输出数组的头部
 * @param {ListNode} head
 * @return {number[]}
 */
const reversePrint1 = function (head) {
    const res = [];

    let node = head;
    while (node) {
        res.unshift(node.val);
        node = node.next;
    }

    return res;
};

test(reversePrint1);

/**
 * @description 使用栈
 * @param {ListNode} head
 * @return {number[]}
 */
const reversePrint2 = function (head) {
    const stack = [];
    const res = [];

    let node = head;
    while (node) {
        stack.push(node.val);
        node = node.next;
    }

    let nodeVal = stack.pop();
    while (nodeVal !== undefined) {
        res.push(nodeVal);
        nodeVal = stack.pop();
    }

    return res;
};

test(reversePrint2);

/**
 * @description 递归
 * @param {ListNode} head
 * @return {number[]}
 */
const reversePrint3 = function (head) {
    const res = [];

    const recursive = (node) => {
        if (node) {
            recursive(node.next);
            res.push(node.val);
        }
    };

    recursive(head);

    return res;
};

test(reversePrint3);
