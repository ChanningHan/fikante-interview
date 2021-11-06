/**
 * 编写一个函数，输入是一个无符号整数（以二进制串的形式），
 * 返回其二进制表达式中数字位数为 '1' 的个数（也被称为 汉明重量).）。

 

提示：
请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。
在 Java 中，编译器使用 二进制补码 记法来表示有符号整数。因此，在上面的 示例 3 中，输入表示有符号整数 -3。
 

示例 1：

输入：n = 11 (控制台输入 00000000000000000000000000001011)
输出：3
解释：输入的二进制串 00000000000000000000000000001011 中，共有三位为 '1'。
示例 2：

输入：n = 128 (控制台输入 00000000000000000000000010000000)
输出：1
解释：输入的二进制串 00000000000000000000000010000000 中，共有一位为 '1'。
示例 3：

输入：n = 4294967293 (控制台输入 11111111111111111111111111111101，部分语言中 n = -3）
输出：31
解释：输入的二进制串 11111111111111111111111111111101 中，共有 31 位为 '1'。
 

提示：

输入必须是长度为 32 的 二进制串 。

 * 
 */

function test(func) {
    const testArr = [{
            input: 11,
            output: 3
        },
        {
            input: 128,
            output: 1
        },
        {
            input: 4294967293,
            output: 31
        }
    ]

    let passCount = 0
    testArr.forEach((item, index) => {
        const res = func(item.input)
        console.log(`test${index+1},${JSON.stringify(item)}, res:${res}`);
        const isPass = res === item.output
        console.log(isPass ? 'pass' : 'failed')
        isPass && passCount++
    })
    console.log(`totolPass: ${passCount}/${testArr.length}`)
}

/**
 * @description 输入数字与1做与运算，如果结果为1，则说明最后一位为1，如果为0则说明最后一位为0，
 * 因此，每次与1做与运算后进行右移，直到该数字为0。这种做法只适用于正数，因为为负数时右移左边会补1，陷入死循环中。
 * 这里的测例3实际上是负数，会陷入死循环
 * 
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight1(n) {
    let res = 0
    if (n < 0) {
        console.log('n < 0')
        return 0
    }
    while (n) {
        n & 1 && res++;
        // >>有符号右位移，负数时左边填充1；>>> 零填充右位移
        n = n >>> 1
    }
    return res
};

test(hammingWeight1)

/**
 * @description
 * 另外一种做法是不移动原来的数字，而是对1做左移，每次与运算完判断是否为0，不为0则存在一个1，对1继续左移，
 * 左移次数为整数的二进制的位数，如32位整数则移动32次。
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight2(n) {
    let flag = 1
    let res = 0
    while (flag) {
        n & flag && res++;
        flag = flag << 1
    }

    return res
};

test(hammingWeight2)


/**
 * @description 前面的方法循环次数为32次，但还有更优的方法：
 * 一个数，每次减1，最右一个1会变成0，这个1后面的0都会变成1，1前面的保持不变。
 * 这个减去1的数与原数做与运算的结果会将这个数后面变成1的位变成0，
 * 因此每有一个1就可以进行这样的运算，直到这个数的所有1都变为0。
 * 如1101，减1变成1100，1100与1101做与运算变成1100，
 * 1100再减1，变成1011，1011与1100做与运算变成1000，
 * 1000减1，变成0111，0111与1000做与运算变成0000，这时候就完成了，我们进行了三次运算，因此1的个数是3。
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight3(n) {
    let res = 0
    while (n) {
        n = (n - 1) & n
        res++
    }
    return res
};

test(hammingWeight3)