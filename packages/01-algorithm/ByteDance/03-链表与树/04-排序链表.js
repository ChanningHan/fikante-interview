// https://leetcode-cn.com/explore/featured/card/bytedance/244/linked-list-and-tree/1040/

/*
* 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

进阶：

你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？


示例 1：


输入：head = [4,2,1,3]
输出：[1,2,3,4]
示例 2：


输入：head = [-1,5,3,4,0]
输出：[-1,0,3,4,5]
示例 3：

输入：head = []
输出：[]


提示：

链表中节点的数目在范围 [0, 5 * 104] 内
-105 <= Node.val <= 105
* */

const { ListNode, createList, logNodeList } = require('./utils');

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 * */
function merge(list1, list2) {
    const head = new ListNode(0);
    let node = head;
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            node.next = list1;
            list1 = list1.next;
        } else {
            node.next = list2;
            list2 = list2.next;
        }
        node = node.next;
    }

    node.next = list1 || list2 || null;
    return head.next;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let sortList = function (head) {
    if (!head) {
        return null;
    }
    function getListLength() {
        let length = 0;
        let node = head;
        while (node) {
            length++;
            node = node.next;
        }
        return length;
    }

    let length = getListLength();

    const dummyHead = new ListNode(0, head);
    for (let subLen = 1; subLen < length; subLen <<= 1) {
        let prev = dummyHead;
        let current = dummyHead.next;
        while (current) {
            const head1 = current;
            for (let i = 1; i < subLen && current.next; i++) {
                current = current.next;
            }

            const head2 = current.next;
            // 断尾
            current.next = null;
            current = head2;
            for (let i = 1; i < subLen && current && current.next; i++) {
                current = current.next;
            }
            let next = null;
            if (current) {
                next = current.next;
                current.next = null;
            }

            prev.next = merge(head1, head2);
            while (prev.next) {
                prev = prev.next;
            }
            current = next;
        }
    }
    return dummyHead.next;
};

logNodeList(sortList(createList([4, 2, 1, 3])));
