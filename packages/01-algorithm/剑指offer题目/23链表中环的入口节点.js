/**
 * 
 * 给定一个链表，返回链表开始入环的第一个节点。
 *  从链表的头节点开始沿着 next 指针进入环的第一个节点为环的入口节点。如果链表无环，则返回 null。

为了表示给定链表中的环，
我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 
如果 pos 是 -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。

说明：不允许修改给定的链表。

 

示例 1：



输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
示例 2：



输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。
示例 3：



输入：head = [1], pos = -1
输出：返回 null
解释：链表中没有环。
 

提示：

链表中节点的数目范围在范围 [0, 104] 内
-105 <= Node.val <= 105
pos 的值为 -1 或者链表中的一个有效索引
 

进阶：是否可以使用 O(1) 空间解决此题？

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
 * @description 使用快慢两个指针，快指针每次移动两步，慢指针每次移动一步，当存在环的时候，
 * 快指针一定会与慢指针相遇，如果不存在环，则快指针走向null则停止。
 * 要找到入口节点，首先假设快指针需要先走x步，慢指针再走y步，环的节点数量为n,然后在入口处相遇。
 * 那么x+y-n = y,即x=n，因此快指针需要先走环的节点数量步，然后同时开始走，即可在入口处相遇。
 * 由于还需要得到环的节点数量，才能进而找到环的入口。
 * 要得到环的节点数很简单，在判断是否存在环时记录相遇时的节点，然后再将指针逐步移动并计数，直到又走到相遇节点，则得到环的节点数量。
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (head === null) return null
    let slow = head
    let fast = head


    // 找到相遇节点
    do {
        if (!slow.next || !fast.next || !fast.next.next) return null
        slow = slow.next
        fast = fast.next.next
    } while (slow !== fast)

    // 得到环的长度
    let circleLength = 0
    do {
        slow = slow.next
        circleLength++
    }
    while (fast !== slow)

    // 快慢指针重新指向头节点，找出入口节点
    slow = head
    fast = head
    for (let i = 0; i < circleLength; i++) {
        fast = fast.next
    }
    while (fast !== slow) {
        fast = fast.next
        slow = slow.next
    }
    return slow

};


class ListNode {
    val;
    next = null;
    constructor(val) {
        this.val = val
    }
}

function test() {
    const testArr = [{
        input: {
            list: [3, 2, 0, -4],
            pos: 1,
        },
        output: 2
    }]

    testArr.forEach((item, index) => {
        console.log(`test${index+1},${JSON.stringify(item)}`)
        let preNode
        let headNode
        let enterNode
        item.input.list.forEach((i, index2) => {
            const node = new ListNode(i)
            if (index2 === item.input.pos) {
                enterNode = node
            }
            if (!preNode) {
                headNode = node
                preNode = headNode
                return
            }
            preNode.next = node
            preNode = node
        })
        preNode.next = enterNode
        const res = detectCycle(headNode)
        console.log(res)
        console.log(res.val === item.output ? 'pass' : 'fail')
    })
}

test()