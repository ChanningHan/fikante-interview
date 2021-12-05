/**
 *
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉树: root =[3,5,1,6,2,0,8,null,null,7,4]





示例 1:

输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出: 3
解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
示例2:

输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出: 5
解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。


说明:

所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉树中。

 *
 */

function TreeNode(val) {
    this.val = val;
    // eslint-disable-next-line no-multi-assign
    this.left = this.right = null;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @description 先求出从根节点到p，q的路径分别为pathP,pathQ,
 * 然后就转成了求两个链表的第一个公共节点或者最后一个公共节点（根据从根节点还是p、q节点开始）。
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
    function findNodePath(node, targetNode, path) {
        if (!node) return false;

        path.push(node);

        if (node === targetNode) {
            return true;
        }

        if (
            findNodePath(node.left, targetNode, path) ||
            findNodePath(node.right, targetNode, path)
        ) {
            return true;
        }
        path.pop();
        return false;
    }

    const pathP = [];
    const pathQ = [];
    findNodePath(root, p, pathP);
    findNodePath(root, q, pathQ);
    debugger;

    let lastNode = null;
    for (let i = 0; i < pathP.length && i < pathQ.length; i++) {
        const nodeP = pathP[i];
        const nodeQ = pathQ[i];
        if (nodeP === nodeQ) {
            lastNode = nodeP;
        } else {
            return lastNode;
        }
    }
    console.log(lastNode);
    return lastNode;
}

const root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);

// 6  4
// lowestCommonAncestor(root, root.left.left, root.left.right.right)
// 5 1
// lowestCommonAncestor(root, root.left, root.right)
// 5 4
lowestCommonAncestor(root, root.left, root.left.right.right);
