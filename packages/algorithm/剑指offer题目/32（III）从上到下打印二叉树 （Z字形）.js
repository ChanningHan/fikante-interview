/**
 * 
 * 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，
 * 第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

 

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [20,9],
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

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @description 用两个栈，一个存放当前行，一个存放下一行,
 * 偶数行从左到右将子节点入栈到下一行，
 * 奇数行从右到左将子节点入栈到下一行。
 * 当前行的栈全部出栈后两个栈交换，下一行作为当前行的栈。
 * 直到两个栈都为空，则打印完毕。
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []
    let currentStack = []
    let nextStack = []
    const res = []
        // 当前层级
    let level = 0

    currentStack.push(root)
    while (currentStack.length) {
        if (!res[level]) {
            res.push([])
        }

        while (currentStack.length) {
            const node = currentStack.pop()
            res[level].push(node.val)
            if (level % 2 === 0) {
                node.left && nextStack.push(node.left)
                node.right && nextStack.push(node.right)
            } else {
                node.right && nextStack.push(node.right)
                node.left && nextStack.push(node.left)
            }
        }

        const temp = currentStack
        currentStack = nextStack
        nextStack = temp
        level++

    }
    return res;
};