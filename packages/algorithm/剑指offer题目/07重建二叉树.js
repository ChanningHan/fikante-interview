/*
 * 输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。

假设输入的前序遍历和中序遍历的结果中都不含重复的数字。


示例 1:


Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]
示例 2:

Input: preorder = [-1], inorder = [-1]
Output: [-1]

限制：

0 <= 节点个数 <= 5000

 * */

class TreeNode {
    val;

    left;

    right;

    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function test(func) {
    const input = {
        preorder: [3, 9, 20, 15, 7],
        inorder: [9, 3, 15, 20, 7],
    };

    const res = func(input.preorder, input.inorder);

    console.log(res);

    const output = new TreeNode(3);
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @description 先根据前序遍历找到根节点，再通过中序遍历找到其左右子树的前序、中序遍历序列，递归构造左右子树即可。
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null;
    }

    const rootNode = new TreeNode(preorder[0]);

    let i = 0;
    for (; i < inorder.length; i++) {
        if (inorder[i] === rootNode.val) {
            break;
        }
    }

    const leftTreeRootNode = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
    const rightTreeRootNode = buildTree(preorder.slice(i + 1), inorder.slice(i + 1));

    rootNode.left = leftTreeRootNode;
    rootNode.right = rightTreeRootNode;

    return rootNode;
}

test(buildTree);
