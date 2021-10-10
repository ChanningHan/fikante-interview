/**
 * 
 * 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

示例1：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
限制：

0 <= 链表长度 <= 1000

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
 * @description 首先比较两个链表的头指针，用较小的作为合并链表的头指针，如L1<L2,
 * 则链表1的指针向后移一位，继续与L2的头指针比较，较小的作为合并链表的下一个节点，如此直到两个链表都为空，这是一个递归的过程。
 * 当L1为空，则直接返回L2，当L2为空直接返回L1，直到都为空。
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2
    }
    if (l2 === null) {
        return l1
    }

    let mergedHead = l1.val < l2.val ? l1 : l2
    if (l1.val < l2.val) {
        mergedHead.next = mergeTwoLists(l1.next, l2)
    } else {
        mergedHead.next = mergeTwoLists(l1, l2.next)
    }

    return mergedHead
};