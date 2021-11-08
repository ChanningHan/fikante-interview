/**
 * 
 * 给定一棵二叉树和其中的一个节点，如何找出中序遍历序列的下一个节点？
 * 树中的节点除了有两个分别指向左、右节点的指针，还有一个指向父节点的指针。

例:
中序遍历为{d, b, h, e, i, a, f, c, g}
输入b输出h，输入i输出a
*/

class TreeNode {
    left;

    right;

    parent;

    val;

    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

function test(func) {
    const inorder = ['d', 'b', 'h', 'e', 'i', 'a', 'f', 'c', 'g'];

    const root = new TreeNode('a');
    root.left = new TreeNode('b');
    root.left.parent = root;
    root.right = new TreeNode('c');
    root.right.parent = root;
    root.left.left = new TreeNode('d');
    root.left.left.parent = root.left;
    root.left.right = new TreeNode('e');
    root.left.right.parent = root.left;
    root.right.left = new TreeNode('f');
    root.right.left.parent = root.right;
    root.right.right = new TreeNode('g');
    root.right.right.parent = root.right;
    root.left.right.left = new TreeNode('h');
    root.left.right.left.parent = root.left.right;
    root.left.right.right = new TreeNode('i');
    root.left.right.right.parent = root.left.right;

    const input1 = root.left;
    const output1 = root.left.right.left;
    const input2 = root.left.right.right;
    const output2 = root;

    const res1 = func(input1);
    const res2 = func(input2);

    console.log('res1', res1);
    if (res1 === output1) {
        console.log('1 pass');
    } else {
        console.log('1 fail');
    }

    console.log('res2', res2);
    if (res2 === output2) {
        console.log('2 pass');
    } else {
        console.log('2 fail');
    }
}

/**
 * @description
 * 首先中序遍历的顺序为：左节点、根节点、右节点，因此节点可以分为三种情况：
 * 1. 节点有右子树，那么节点的下一个节点就是其右子树的最左节点，只要沿着右子树的左节点指针一直找即可。
 * 2. 节点没有右子树，且节点为父节点的左节点，那么下一个节点就是父节点。
 * 3. 节点没有右子树，且节点为父节点的右节点，那么此时就需要沿着父节点指针，
 * 直到找到一个节点是该节点的父节点的左节点，该节点的父节点即是我们要找的下一个节点。
 *
 * @param {string[]} inorder
 * @param {TreeNode} node
 *
 * */
function findNextNode(node) {
    if (node.right) {
        let nextNode = node.right;
        while (nextNode) {
            if (nextNode.left) {
                nextNode = nextNode.left;
            } else {
                return nextNode;
            }
        }
    }
    if (node.parent.left === node) {
        return node.parent;
    }
    if (node.parent.right === node) {
        let parentNode = node.parent;
        while (parentNode) {
            if (!parentNode.parent) {
                return null;
            }
            if (parentNode.parent.left === parentNode) {
                return parentNode.parent;
            }
            if (parentNode.parent.right === parentNode) {
                parentNode = parentNode.parent;
            }
        }
    }
}

test(findNextNode);
