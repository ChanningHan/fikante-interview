/**
 * 
 * 求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

 

示例 1：

输入: n = 3
输出: 6
示例 2：

输入: n = 9
输出: 45
 

限制：

1 <= n <= 10000

 * 
 */

/**
 * @description 使用类
 * @param {number} n
 * @return {number}
 */
function sumNums(n) {
    AddCounter.target = n;
    new AddCounter()
    return AddCounter.res
};

class AddCounter {
    static target = 0
    static count = 0
    static res = 0
    constructor() {
        AddCounter.res += ++AddCounter.count
        AddCounter.count < AddCounter.target && new AddCounter()
    }
}

console.log(sumNums(2));

/**
 * @description 使用递归+短路
 * @param {number} n 
 * @return {number} res
 */
function sumNums2(n) {
    return n && n + sumNums2(n - 1)
}