/**
 * 
 * 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，
 * 本题从1开始计数，即链表的尾节点是倒数第1个节点。

例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。
这个链表的倒数第 3 个节点是值为 4 的节点。

 

示例：

给定一个链表: 1->2->3->4->5, 和 k = 2.

返回链表 4->5.

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
 * @description 定义两个指针，第一个指针先走k-1步，然后第二个指针开始走，两个指针同时前进，直到第一个指针到达尾节点。
 * 至于为什么先走k-1步，因为倒数第k个节点与尾节点的距离是k-1，要让两个指针保持一个距离k-1，当第一个指针走到尾节点时，第二个指针正好是倒数第k个节点，
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    if (head === null || k < 1) return null

    let fastP = head
    let slowP = head
    for (let i = 0; i < k - 1; i++) {
        fastP = fastP.next
        if (fastP === null) throw new Error('k longger than list')
    }

    while (fastP.next !== null) {
        fastP = fastP.next
        slowP = slowP.next
    }
    return slowP

};