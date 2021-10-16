/**
 * 
 * 请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。

 

示例 1：



输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
示例 2：



输入：head = [[1,1],[2,1]]
输出：[[1,1],[2,1]]
示例 3：



输入：head = [[3,null],[3,0],[3,null]]
输出：[[3,null],[3,0],[3,null]]
示例 4：

输入：head = []
输出：[]
解释：给定的链表为空（空指针），因此返回 null。
 

提示：

-10000 <= Node.val <= 10000
Node.random 为空（null）或指向链表中的节点。
节点数目不超过 1000 。

 * 
 */

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};


/**
 * @description 将原链表中的每个节点复制一个并插在其后
 * @param {Node} head
 */
function connectCopyList(head) {
    let node = head
    while (node) {
        node.next = new Node(node.val, node.next, null)
        node = node.next.next
    }
}

/**
 * @description 为合成链表中的新节点设置random。random设置为其前一节点的random的next。
 */
function setRandom(head) {
    let node = head
    while (node && node.next) {
        if (node.random) {
            node.next.random = node.random.next
        }
        node = node.next.next
    }
}

/**
 * @description 将合成链表拆分为原链表和复制链表。
 */
function departList(head) {
    let node = head
    const copyHead = head.next
    while (node && node.next) {
        const copyNode = node.next
        node.next = copyNode.next
        copyNode.next = copyNode.next ? copyNode.next.next : null
        node = node.next
    }
    return copyHead
}



/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) return null

    connectCopyList(head)
    setRandom(head)

    return departList(head)
};