// https://leetcode-cn.com/explore/featured/card/bytedance/244/linked-list-and-tree/1025/

/*
* 给你一个链表数组，每个链表都已经按升序排列。

请你将所有链表合并到一个升序链表中，返回合并后的链表。



示例 1：

输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6
示例 2：

输入：lists = []
输出：[]
示例 3：

输入：lists = [[]]
输出：[]


提示：

k == lists.length
0 <= k <= 10^4
0 <= lists[i].length <= 500
-10^4 <= lists[i][j] <= 10^4
lists[i] 按 升序 排列
lists[i].length 的总和不超过 10^4
* */

const { ListNode } = require('./utils');

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function (lists) {
    if (!lists || !lists.length) return null;
    if (lists.length === 1) return lists[0];
    function mergeTwoList(listA, listB) {
        const head = new ListNode(0);
        let node = head;

        while (listA || listB) {
            if (!listA || !listB) {
                node.next = listA || listB;
                node = node.next;
                break;
            }

            if (listA.val <= listB.val) {
                node.next = listA;
                listA = listA.next;
            } else {
                node.next = listB;
                listB = listB.next;
            }
            node = node.next;
        }

        return head.next;
    }

    function recursive(start, end) {
        if (start > end) throw new Error(`error: ${start}, ${end}`);
        if (start === end) return lists[start];
        if (end - start === 1) return mergeTwoList(lists[start], lists[end]);

        const middle = (start + end) >> 1;
        return mergeTwoList(recursive(start, middle), recursive(middle + 1, end));
    }

    return recursive(0, lists.length - 1);
};
