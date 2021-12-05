/**
 *
 * 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。
 * 假设压入栈的所有数字均不相等。例如，序列 {1,2,3,4,5} 是某栈的压栈序列，
 * 序列 {4,5,3,2,1} 是该压栈序列对应的一个弹出序列，
 * 但 {4,3,5,1,2} 就不可能是该压栈序列的弹出序列。



示例 1：

输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
输出：true
解释：我们可以按以下顺序执行：
push(1), push(2), push(3), push(4), pop() -> 4,
push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
示例 2：

输入：pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
输出：false
解释：1 不能在 2 之前弹出。


提示：

0 <= pushed.length == popped.length <= 1000
0 <= pushed[i], popped[i] < 1000
pushed是popped的排列。

 *
 */

/**
 * @description 弹出一个数时，检查栈顶的数是否等于这个数，
 * 如果是则弹出，如果不是先按照压入序列将数逐个压入栈，直到压入的数等于弹出的这个数，
 * 再弹出这个数，
 * 如果所有都压入了但仍没有数与要弹出的数相等则不可能是弹出序列，返回false。
 *
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
function validateStackSequences(pushed, popped) {
    if (!popped.length) return true;
    if (!pushed.length || pushed.length !== popped.length) return false;
    const stack = [];

    while (popped.length) {
        const poppedNum = popped.shift();
        if (stack.length && stack[stack.length - 1] === poppedNum) {
            stack.pop();
        } else {
            if (!pushed.length) return false;

            let foundIndex;
            const isFound = pushed.some((i, index) => {
                if (i === poppedNum) {
                    foundIndex = index;
                    return true;
                }
                stack.push(i);
                return false;
            });

            if (!isFound) return false;

            pushed = pushed.splice(foundIndex + 1);
        }
    }

    return true;
}

/**
 * @description 弹出一个数时，检查栈顶的数是否等于这个数，如果是则弹出，如果不是先按照压入序列将数逐个压入栈，直到压入的数等于弹出的这个数，再弹出这个数，
 * 如果所有都压入了但仍没有数与要弹出的数相等则不可能是弹出序列，返回false。
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
function validateStackSequences2(pushed, popped) {
    if (!popped.length) return true;
    if (!pushed.length || pushed.length !== popped.length) return false;

    const stack = [];
    let popIndex = 0;
    for (let i = 0; i < pushed.length; i++) {
        stack.push(pushed[i]);
        while (stack.length && stack[stack.length - 1] === popped[popIndex]) {
            stack.pop();
            popIndex++;
        }
    }
    return !stack.length;
}

function test() {
    //     [1,2,3,4,5], popped = [4,5,3,2,1]
    // 输出：true
    // 解释：我们可以按以下顺序执行：
    // push(1), push(2), push(3), push(4), pop() -> 4,
    // push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
    // 示例 2：

    // 输入：pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
    const testArr = [
        {
            input: {
                pushed: [1, 2, 3, 4, 5],
                popped: [4, 5, 3, 2, 1],
            },
            output: true,
        },
        {
            input: {
                pushed: [1, 2, 3, 4, 5],
                popped: [4, 3, 5, 1, 2],
            },
            output: false,
        },
        {
            input: {
                pushed: [1, 0, 2],
                popped: [2, 1, 0],
            },
            output: false,
        },
    ].slice(0);

    testArr.forEach((item, index) => {
        console.log(`test${index + 1}, ${JSON.stringify(item)}`);
        const res = validateStackSequences2(item.input.pushed, item.input.popped);
        console.log('res', res);
        console.log(res === item.output ? 'pass' : 'fail');
    });
}

test();
