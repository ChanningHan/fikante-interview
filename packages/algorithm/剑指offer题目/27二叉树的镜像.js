/**
 * 
 * 请完成一个函数，输入一个二叉树，该函数输出它的镜像。

例如输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
镜像输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1

 

示例 1：

输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]
 

限制：

0 <= 节点个数 <= 1000

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
 * @description 镜像二叉树就是遍历原二叉树，当存在子节点时交换左右子节点，递归即可，递归结束条件为叶子节点或null节点。
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function mirrorTree(root) {
    if (root === null || root.left === null && root.right === null) {
        return root;
    }

    let temp = root.left
    root.left = mirrorTree(root.right)
    root.right = mirrorTree(temp)

    return root
};