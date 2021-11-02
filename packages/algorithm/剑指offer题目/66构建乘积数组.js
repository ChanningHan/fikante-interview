/**
 * 
 * 给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，其中 B[i] 的值是数组 A 中除了下标 i 以外的元素的积, 即 B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。不能使用除法。

 

示例:

输入: [1,2,3,4,5]
输出: [120,60,40,30,24]
 

提示：

所有元素乘积之和不会溢出 32 位整数
a.length <= 100000

 * 
 */


/**
 * @description 动态规划。
 * 可以将B[i]分成两个部分C[i]和D[i],
 * 其中C[i]=A[1]*A[2]...*A[i-2]*A[i-1]
 * D[i] = A[i+1]*A[i+2]*...A[n-1]。
 * 我们可以在草稿纸中画出B[i]的一个矩阵会更直观，
 * C[i-1] = A[1]*A[2]...*A[i-2] = C[i]/A[i-1]，
 * D[i-1] = A[i]*A[i+1]*...A[n-1] = D[i]*A[i]
 * 因此有，
 * C[i] = C[i-1] * A[i-1]
 * D[i] = D[i+1] * A[i+1]
 * 
 * 而B[i] = C[i] * D[i]，
 * 因此我们得到了转义方程：
 * B[i] = C[i-1] * A[i-1] * D[i+1] * A[i+1]，
 * 由于C[i]和D[i]的递推方向是相反的，
 * 我们还是先分别对C[i]和D[i]进行求值，再计算B[i]。
 * 且我们可以简单推导出C和D中的极端值：
 * B[0] = A[1]*A[2]...*A[n-1]
 * 又B[0] = C[0] * D[0],D[0] = A[1]*...*A[n-1],
 * 即B[0] = C[0] * D[0] = D[0]
 * 因此C[0] = 1，
 * 同理：B[n-1] = A[1]*A[2]...A[n-2] = C[n-1]* 1 = C[n-1] * D[n-1]
 * 因此D[n-1]= 1
 *  
 * @param {number[]} a
 * @return {number[]}
 */
function constructArr(a) {
    const n = a.length
    const b = []
    const c = []
    const d = []

    c[0] = 1
    d[n - 1] = 1

    for (let i = 1; i < n; i++) {
        c[i] = c[i - 1] * a[i - 1]
    }

    for (let i = n - 2; i >= 0; i--) {
        d[i] = d[i + 1] * a[i + 1]
    }

    console.log('c', c);
    console.log('d', d);

    for (let i = 0; i < n; i++) {
        b[i] = c[i] * d[i]
    }

    return b
};


console.log(constructArr([1, 2, 3, 4, 5]));