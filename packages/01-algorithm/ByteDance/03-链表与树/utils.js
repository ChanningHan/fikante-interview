class ListNode {
    val;

    next = null;

    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * @param {number[]} nums
 * @return {ListNode}
 * */
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

/**
 * @param {ListNode} listNode
 * */
function logNodeList(listNode) {
    const res = [];
    while (listNode) {
        res.push(listNode);
        listNode = listNode.next;
    }
    console.log('log nodeList: ');
    console.log(res);
}

module.exports = {
    ListNode,
    createList,
    logNodeList,
};
