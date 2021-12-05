/**
 *
 * 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。



 例如:
 给定二叉树:[3,9,20,null,null,15,7],

 3
 / \
 9  20
 /  \
 15   7
 返回：

 [3,9,20,15,7]


 提示：

 节点总数 <= 1000

 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let levelOrder = function (root) {
    if (!root) return [];
    const queue = [];
    const res = [];
    queue.push(root);

    while (queue.length) {
        const node = queue.shift();
        res.push(node.val);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }

    return res;
};
