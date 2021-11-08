/*
*
* 请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

例如，二叉树[1,2,2,3,4,4,3] 是对称的。

  1
 / \
 2  2
/ \ / \
3 4 4 3
但是下面这个[1,2,2,null,3,null,3] 则不是镜像对称的:

  1
 / \
 2  2
 \  \
 3  3



示例 1：

输入：root = [1,2,2,3,4,4,3]
输出：true
示例 2：

输入：root = [1,2,2,null,3,null,3]
输出：false


限制：

0 <= 节点个数 <= 1000

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
 * @description 前序遍历与对称的前序遍历算法。
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
    function isSymmetric2(root1, root2) {
        if (root1 === null && root2 === null) return true;
        if (root1 === null || root2 === null) return false;
        if (root1.val !== root2.val) return false;
        return isSymmetric2(root1.left, root2.right) && isSymmetric2(root1.right, root2.left);
    }

    return isSymmetric2(root, root);
}
