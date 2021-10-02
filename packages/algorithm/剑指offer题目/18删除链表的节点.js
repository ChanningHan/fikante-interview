/**
 * 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。

返回删除后的链表的头节点。

注意：此题对比原题有改动

示例 1:

输入: head = [4,5,1,9], val = 5
输出: [4,1,9]
解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
示例 2:

输入: head = [4,5,1,9], val = 1
输出: [4,5,9]
解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.
 

说明：

题目保证链表中节点的值互不相同
若使用 C 或 C++ 语言，你不需要 free 或 delete 被删除的节点

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
 * @description （原题）常规思路是从head开始遍历，直到遍历到要一个节点的next指向要删除的节点，把该节点的next指向要删除的节点的下一个节点。
 * 这种方式的时间复杂度是O(n)。
 * 如果要求O(1)的算法，我们考虑可以将要删除的节点的下一节点的val覆盖掉要删除节点的val，再将要删除节点的next指向next.next。
 * 但如果要删除的节点是最后一个节点，则没办法用这种方法，只能从头开始遍历。
 * 如果要删除的节点为头节点，则直接将头节点的next设为null。
 * 时间复杂度为：(O(n-1)+(n-1)*O(1))/n = O(1)
 * @param {ListNode} head
 * @param {ListNode} toBeDeleted
 * @return {ListNode}
 */
function deleteNode(head, toBeDeleted) {
    // 删除头指针
    if (head === toBeDeleted) {
        toBeDeleted.next = null;
        return head
    }
    // 删除尾指针
    if (!toBeDeleted.next) {
        let p
        while (p.next) {
            if (p.next === toBeDeleted) {
                p.next = p.next.next
                break;
            } else {
                p = p.next
            }
        }
        return head
    }

    toBeDeleted.val = toBeDeleted.next.val
    toBeDeleted.next = toBeDeleted.next.next
    return head
};


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @description 力扣题目。用哨兵节点来遍历链表。
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode2 = function(head, val) {
    if (!head || !val) {
        return null;
    }

    let p = new ListNode(-1)
    p.next = head
    while (p.next) {
        if (p.next.val === val) {
            p.next = p.next.next
            break
        }
        p = p.next
    }
    return p.next;
};