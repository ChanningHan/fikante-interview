/**
 * 
 * 给定一棵二叉树和其中的一个节点，如何找出中序遍历序列的下一个节点？树中的节点除了有两个分别指向左、右节点的指针，还有一个指向父节点的指针。

例:
中序遍历为{d, b, h, e, i, a, f, c, g}
输入b输出h，输入i输出a
*/


function test(func) {
    const inorder = ['d', 'b', 'h', 'e', 'i', 'a', 'f', 'c', 'g']


    const root = new TreeNode('a')
    root.left = new TreeNode('b')
    root.left.parent = root
    root.right = new TreeNode('c')
    root.right.parent = root
    root.left.left = new TreeNode('d')
    root.left.left.parent = root.left
    root.left.right = new TreeNode('e')
    root.left.right.parent = root.left
    root.right.left = new TreeNode('f')
    root.right.left.parent = root.right
    root.right.right = new TreeNode('g')
    root.right.right.parent = root.right
    root.left.right.left = new TreeNode('h')
    root.left.right.left.parent = root.left.right
    root.left.right.right = new TreeNode('i')
    root.left.right.right.parent = root.left.right

    const input1 = root.left
    const output1 = root.left.right.left
    const input2 = root.left.right.right
    const output2 = root

    const res1 = func(input1)
    const res2 = func(input2)



    console.log('res1', res1)
    if (res1 === output1) {
        console.log('1 pass');
    } else {
        console.log('1 fail')
    }

    console.log('res2', res2)
    if (res2 === output2) {
        console.log('2 pass');
    } else {
        console.log('2 fail')
    }

}


class TreeNode {
    left = null
    right = null
    parent = null
    val
    constructor(val) {
        this.val = val
    }
}


/**
 * @description 节点可先分成4种情况。1. 节点为其父节点的左节点，且其没有右子树，则下一个节点即为它的父节点。
 * 2. 节点为其父节点的左节点，且有右子树，则下一节点为其右子树的最左节点
 * 3. 节点为其父节点的右节点，且其没有右子树，则向上找父节点，如果父节点是父父节点的左节点，则返回父节点，否则继续向上找其父节点，直到根节点。
 * 4. 节点为其父节点的右节点，且其有右子树，则返回其右子树的最左节点。
 * 可以发现2，4都是返回其右子树的最左节点，因此可以合并为一种情况：节点有右子树，则返回其右子树的最左节点。
 * 
 * @param {string[]} inorder
 * @param {TreeNode} node
 * 
 * */
function findNextNode(node) {
    if (node.right) {
        let nextNode
        let rightTreeNode = node.right
        while (nextNode) {
            nextNode = rightTreeNode
            if (rightTreeNode.left) {
                nextNode = rightTreeNode.left
            } else {
                return nextNode
            }
        }
    } else {
        if (node.parent.left === node) {
            return node.parent
        } else if (node.parent.right) {
            let parentNode = node.parent
            while (parentNode.parent) {
                if (parentNode === parentNode.parent.left) {
                    return parentNode
                } else if (parentNode === parentNode.parent.right) {
                    parentNode = parentNode.parent
                }
            }
            return parentNode
        }
    }
}


test(findNextNode)