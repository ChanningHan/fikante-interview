/**
 *
 * 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。



 例如:
 给定二叉树:[3,9,20,null,null,15,7],

 3
 / \
 9  20
 /  \
 15   7
 返回其层次遍历结果：

 [
 [3],
 [9,20],
 [15,7]
 ]


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
 * @return {number[][]}
 */
let levelOrder = function (root) {
    if (!root) return [];
    const queue = [];
    const res = [[]];
    // 当前行未打印数量
    let current = 0;
    // 下一行未打印数量
    let next = 0;

    queue.push(root);
    current = 1;
    while (queue.length) {
        const node = queue.shift();
        res[res.length - 1].push(node.val);
        current--;

        if (node.left) {
            queue.push(node.left);
            next++;
        }
        if (node.right) {
            queue.push(node.right);
            next++;
        }

        if (!current) {
            next && res.push([]);
            current = next;
            next = 0;
        }
    }

    return res;
};
