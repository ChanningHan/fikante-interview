/**
 * 
 * 0,1,···,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字（删除后从下一个数字开始计数）。求出这个圆圈里剩下的最后一个数字。

例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。

 

示例 1：

输入: n = 5, m = 3
输出: 3
示例 2：

输入: n = 10, m = 17
输出: 2
 

限制：

1 <= n <= 10^5
1 <= m <= 10^6

 * 
 */

/**
 * @description 模拟环形数组。时间复杂度为O(mn),该方法超时。
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
function lastRemaining(n, m) {
    if (n < 1 || m < 1) return -1
    let circleList = []
    for (let i = 0; i < n; i++) {
        circleList.push(i)
    }

    let currentIndex = 0
    while (circleList.length > 1) {
        currentIndex = (currentIndex + m - 1) % circleList.length
        circleList.splice(currentIndex, 1)

    }
    return circleList[0]
};