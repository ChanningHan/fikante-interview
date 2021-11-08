/*
 *
 *请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

示例 1：

输入：s = "We are happy."
输出："We%20are%20happy."


限制：

0 <= s 的长度 <= 10000

 * */

function test(func) {
    const input = 'we are happy';
    const output = 'we%20are%20happy';
    const res = func(input);
    if (res === output) {
        console.log('pass');
    } else {
        console.log('failed');
        console.log(res);
    }
}

/**
 * @param {string} s
 * @return {string}
 */
function replaceSpace(s) {
    return s.replace(/\s/g, '%20');
}

/**
 * @param {string} s
 * @return {string}
 */
function replaceSpace2(s) {
    const oldArr = s.split('');
    const newArr = [];
    let newArrIndex;
    let spaceCount = 0;
    oldArr.forEach((i) => {
        if (i === ' ') {
            spaceCount++;
        }
    });
    newArrIndex = oldArr.length + 2 * spaceCount - 1;
    for (let i = oldArr.length - 1; i >= 0; i--) {
        if (oldArr[i] !== ' ') {
            newArr[newArrIndex] = oldArr[i];
            newArrIndex--;
        } else {
            newArr[newArrIndex] = '0';
            newArr[newArrIndex - 1] = '2';
            newArr[newArrIndex - 2] = '%';
            newArrIndex -= 3;
        }
    }
    return newArr.join('');
}

// test(replaceSpace);
test(replaceSpace2);
