/**
 *
 * 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。



示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL


限制：

0 <= 节点个数 <= 5000

 *
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @description 使用三个指针，分别记录节点的前后以及自身，防止在反转时断裂。
 * @param {ListNode} head
 * @return {ListNode}
 */
let reverseList = function (head) {
    if (!head || !head.next) return head;

    let pre = null;
    let current = head;
    let { next } = head;
    while (next !== null) {
        current.next = pre;
        pre = current;
        current = next;
        next = current.next;
    }
    current.next = pre;
    return current;
};
