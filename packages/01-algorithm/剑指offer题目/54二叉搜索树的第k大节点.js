/*
 *
 *给定一棵二叉搜索树，请找出其中第k大的节点。



示例 1:

输入: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
  2
输出: 4
示例 2:

输入: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
输出: 4


限制：

1 ≤ k ≤ 二叉搜索树元素个数

 *
 * */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
function kthLargest(root, k) {
    if (!root || k <= 0) throw new Error('error input');
    let count = 0;
    let resNode = null;
    function postOrderTraverse(node) {
        if (!node) return;
        if (node.right) {
            postOrderTraverse(node.right);
        }
        if (++count === k) {
            resNode = node;
            return;
        }
        if (node.left) {
            postOrderTraverse(node.left);
        }
    }

    postOrderTraverse(root);
    return resNode ? resNode.val : 0;
}
