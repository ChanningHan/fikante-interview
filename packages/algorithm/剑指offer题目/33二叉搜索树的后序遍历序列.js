/**
 * 
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。

 

参考以下这颗二叉搜索树：

     5
    / \
   2   6
  / \
 1   3
示例 1：

输入: [1,6,3,2,5]
输出: false
示例 2：

输入: [1,3,2,6,5]
输出: true
 

提示：

数组长度 <= 1000

 * 
 */

/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
    if (!postorder.length) return true
    const root = postorder[postorder.length - 1]
    let leftIndex = 0;

    for (; leftIndex < postorder.length - 1; leftIndex++) {
        if (postorder[leftIndex] > root) {
            break;
        }
    }


    let rightIndex = leftIndex;
    for (; rightIndex < postorder.length - 1; rightIndex++) {
        if (postorder[rightIndex] < root) {
            return false
        }
    }


    let left = true;
    if (leftIndex > 0) {
        left = verifyPostorder(postorder.slice(0, leftIndex))
    }

    let right = true
    if (leftIndex < postorder.length - 1) {
        right = verifyPostorder(postorder.slice(leftIndex, postorder.length - 1))
    }

    return left && right
};


function test() {
    const testArr = [{
            input: [1, 6, 3, 2, 5],
            output: false
        }, {
            input: [1, 3, 2, 6, 5],
            output: true
        }, {
            input: [1, 2, 5, 10, 6, 9, 4, 3],
            output: false
        },
        {
            input: [179, 437, 1405, 5227, 8060, 8764, 8248, 4687, 3297, 13038, 12691, 15744, 16195, 15642, 19813, 17128, 21051, 20707, 22177, 21944, 23644, 23281, 19970, 23652, 26471, 31467, 33810, 32300, 33880, 27334, 25987, 35643, 35103, 36489, 42534, 42990, 42942, 37090, 36075, 34516, 16624, 11335, 10737, 44641, 45754, 47096, 46021, 49150, 48013, 49814, 51545, 52555, 50701, 47875, 56783, 57558, 53812, 62008, 61737, 63052, 63478, 62799, 59246, 64765, 64066, 63862, 65384, 67449, 66552, 57741, 45618, 44412, 667, 69718, 75519, 76819, 72971, 79319, 78145, 80615, 84280, 80984, 86598, 85903, 84334, 80867, 87993, 92361, 88465, 87738, 80364, 94380, 94446, 96785, 93694, 76847, 99655, 98675, 97001, 72112],
            output: true
        }
    ].slice(2, 3)
    testArr.forEach((item, index) => {
        console.log(`test${index+1}, ${JSON.stringify(item)}`);
        const res = verifyPostorder(item.input)
        console.log('res', res);
        console.log(res === item.output ? 'pass' : 'fail');
    })
}

test()