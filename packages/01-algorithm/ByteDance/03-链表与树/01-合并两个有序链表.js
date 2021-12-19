// https://leetcode-cn.com/explore/featured/card/bytedance/244/linked-list-and-tree/1048/
/*
*
* 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。



示例 1：


输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
示例 2：

输入：l1 = [], l2 = []
输出：[]
示例 3：

输入：l1 = [], l2 = [0]
输出：[0]


提示：

两个链表的节点数目范围是 [0, 50]
-100 <= Node.val <= 100
l1 和 l2 均按 非递减顺序 排列

* */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
let mergeTwoLists = function (list1, list2) {
    if (!list1 && !list2) return null;
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }

    if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }

    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
};

class ListNode {
    val;

    next = null;

    constructor(val) {
        this.val = val;
    }
}

function createList(nums) {
    let root = null;
    let node = null;
    nums.forEach((num) => {
        const newNode = new ListNode(num);
        if (!node) {
            root = newNode;
            node = newNode;
        } else {
            node.next = newNode;
            node = node.next;
        }
    });

    return root;
}

console.log(createList([1, 3, 4]));

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
let mergeTwoLists2 = function (list1, list2) {
    if (!list1 && !list2) return null;
    if (!list1) return list2;
    if (!list2) return list1;

    const root = new ListNode(0);
    let node = root;

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
    node.next = list1 || list2;

    return root.next;
};

console.log(mergeTwoLists2(createList([1, 2, 4]), createList([1, 3, 4])));
