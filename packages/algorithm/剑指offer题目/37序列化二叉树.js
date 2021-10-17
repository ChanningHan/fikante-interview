/**
 * 
 * 请实现两个函数，分别用来序列化和反序列化二叉树。

你需要设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

提示：输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。

 

示例：


输入：root = [1,2,3,null,null,4,5]
输出：[1,2,3,null,null,4,5]

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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let treeStr = ''
    const arr = []

    function recursive(node) {
        if (!node) {
            // treeStr += '$'
            arr.push('$')
            return;
        }

        // treeStr += `${treeStr?',':''}${node.val}`
        // treeStr += `${treeStr?',':''}${node.val}`
        arr.push(node.val)
        recursive(node.left)
        recursive(node.right)
    }



    recursive(root)

    // return treeStr
    return arr.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (!data) return null
    const dataArr = data.split(',')
    let dataIndex = 0;

    function recursive() {
        const val = dataArr[dataIndex]
        if (val === undefined || val === '$') return null;

        const node = new TreeNode(val)
        dataIndex++
        node.left = recursive()
        dataIndex++
        node.right = recursive()

        return node
    }

    return recursive()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

function test() {

}

function toStr(arr) {
    let treeStr = ''
    for (let i = 0; i < arr.length; i++) {
        treeStr += `${treeStr?',':''}${arr[i]}`
    }
    return treeStr
}

const res = toStr([1, 2, 3, 4, 5])
console.log(res);
console.log(res.split(','));