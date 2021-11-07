/**
 * 
 * 0,1,···,n-1这n个数字排成一个圆圈，从数字0开始，0
 * 每次从这个圆圈里删除第m个数字（删除后从下一个数字开始计数）。
 * 求出这个圆圈里剩下的最后一个数字。

例如，0、1、2、3、4这5个数字组成一个圆圈，
从数字0开始每次删除第3个数字，
则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。

 

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



/**
 * @description 动态规划。
 * 推导转移方程：
 * 设f(n)为问题[n,m]的解，
 * 在[n,m]问题中，因为是第一轮，从0开始，因此要删除的数是(m-1)%n，
 * 则下一轮中开始的数字是m%n,设t=m%n，[n,m]中删除的即为t-1，那么下一轮中的末尾数字是t-2
 * 则[n-1,m]和[n,m]中数字的关系有：
 * 0        t
 * 1        t+1
 * ...      ...
 * n-2      t-2
 *
 * 因为[n-1,m]中剩下的一个数也就是[n,m]中剩下的数，
 * 假设在[n-1,m]中这个数是x，即f(n-1) = x,
 * 那么根据上面这个对应关系，
 * x在[n,m]中的位置即为(t+x)%n，
 * 代入t和x对应的关系为：
 * f(n) = (m%n+f(n-1))%n = ( m + f(n-1) ) % n，
 * 因此转移方程即为：f(n) = ( m + f(n-1) ) % n。
 * 且我们可以轻易知道f(1)=0，
 * 因此可以基于递归或循环进行动态规划推导。
 * 先是基于递归的（此方法会爆栈）
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
function lastRemaining2(n, m) {
    if (n === 1) return 0
    return (m + lastRemaining2(n - 1, m)) % n
};

console.log(lastRemaining2(5, 3));
console.log(lastRemaining2(10000, 120659));


/**
 * @description 动态规划。
 * 推导转移方程：
 * 设f(n)为问题[n,m]的解，
 * 在[n,m]问题中，因为是第一轮，从0开始，因此要删除的数是(m-1)%n，
 * 则下一轮中开始的数字是m%n,设t=m%n，[n,m]中删除的即为t-1，那么下一轮中的末尾数字是t-2
 * 则[n-1,m]和[n,m]中数字的关系有：
 * 0        t
 * 1        t+1
 * ...      ...
 * n-2      t-2
 *
 * 因为[n-1,m]中剩下的一个数也就是[n,m]中剩下的数，
 * 假设在[n-1,m]中这个数是x，即f(n-1) = x,
 * 那么根据上面这个对应关系，
 * x在[n,m]中的位置即为(t+x)%n，
 * 代入t和x对应的关系为：
 * f(n) = (m%n+f(n-1))%n = ( m + f(n-1) ) % n，
 * 因此转移方程即为：f(n) = ( m + f(n-1) ) % n。
 * 且我们可以轻易知道f(1)=0，
 * 因此可以基于递归或循环进行动态规划推导。
 * 现在是基于循环的
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
function lastRemaining3(n, m) {
    let last = 0
    for (let i = 2; i <= n; i++) {
        last = (last + m) % i
    }
    return last
};

console.log(lastRemaining3(5, 3));
console.log(lastRemaining3(800002, 120659));