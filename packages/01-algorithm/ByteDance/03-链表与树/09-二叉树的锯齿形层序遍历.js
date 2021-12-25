// https://leetcode-cn.com/explore/featured/card/bytedance/244/linked-list-and-tree/1027/
/*
 *给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回锯齿形层序遍历如下：

[
  [3],
  [20,9],
  [15,7]
]
 * */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
let zigzagLevelOrder = function (root) {
    // 奇数层：子节点从左到右入栈
    // 偶数层：子节点从右到左入栈

    if (!root) return [];

    let currentLayer = [root];
    let nextLayer = [];
    const res = [];

    let depth = 0;
    while (currentLayer.length) {
        res.push([]);
        while (currentLayer.length) {
            const node = currentLayer.pop();
            res[res.length - 1].push(node.val);
            if (depth % 2 === 0) {
                node.left && nextLayer.push(node.left);
                node.right && nextLayer.push(node.right);
            } else {
                node.right && nextLayer.push(node.right);
                node.left && nextLayer.push(node.left);
            }
        }
        currentLayer = nextLayer;
        nextLayer = [];
        depth++;
    }

    return res;
};
