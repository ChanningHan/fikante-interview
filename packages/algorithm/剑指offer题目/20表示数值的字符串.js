/*
 *请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。

数值（按顺序）可以分成以下几个部分：

若干空格
一个小数或者整数
（可选）一个'e'或'E'，后面跟着一个整数
若干空格
小数（按顺序）可以分成以下几个部分：

（可选）一个符号字符（'+' 或 '-'）
下述格式之一：
至少一位数字，后面跟着一个点 '.'
至少一位数字，后面跟着一个点 '.' ，后面再跟着至少一位数字
一个点 '.' ，后面跟着至少一位数字
整数（按顺序）可以分成以下几个部分：

（可选）一个符号字符（'+' 或 '-'）
至少一位数字
部分数值列举如下：

["+100", "5e2", "-123", "3.1416", "-1E-16", "0123"]
部分非数值列举如下：

["12e", "1a3.14", "1.2.3", "+-5", "12e+5.4"]


示例 1：

输入：s = "0"
输出：true
示例 2：

输入：s = "e"
输出：false
示例 3：

输入：s = "."
输出：false
示例 4：

输入：s = ".1"
输出：true


提示：

1 <= s.length <= 20
s 仅含英文字母（大写和小写），数字（0-9），加号 '+' ，减号 '-' ，空格 ' ' 或者点 '.' 。

 *
 * */

function test(fn) {
    const inputArr = [
        '0',
        'e',
        '.',
        '.1',
        '+100',
        '5e2',
        '-123',
        '3.1416',
        '-1E-16',
        '0123',
        '12e',
        '1a3.14',
        '1.2.3',
        '+-5',
        '12e+5.4',
        ' ',
    ];
    const outputArr = [
        true,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
    ];

    let passCount = 0;
    inputArr.forEach((item, index) => {
        if (index === inputArr.length - 1) debugger;
        const res = fn(item);
        const isPass = res === outputArr[index];
        isPass && passCount++;
        console.log(`test${index + 1}, res:${res},input:${item},output:${outputArr[index]}`);
        console.log(isPass ? 'pass' : 'fail');
    });
    console.log(`total pass: ${passCount} / ${inputArr.length}`);
}

/**
 * @param {string} s
 * @return {boolean}
 */
function isNumber(s) {
    let cursor = 0;

    // 扫描无符号整数
    function scanUnsignedInteger() {
        const lastCursor = cursor;
        while (s[cursor] >= '0' && s[cursor] <= '9') {
            cursor++;
        }
        return cursor > lastCursor;
    }

    // 扫描有符号整数
    function scanInteger() {
        if (s[cursor] === '+' || s[cursor] === '-') {
            cursor++;
        }
        return scanUnsignedInteger();
    }

    // 扫描空格
    function scanSpace() {
        const lastCursor = cursor;
        while (s[cursor] === ' ') {
            cursor++;
        }
        return cursor > lastCursor;
    }

    // 空格
    if (s[cursor] === ' ') {
        scanSpace(s);
    }

    // A整数部分
    const hasInteger = scanInteger();
    let hasFraction;
    // 数字是否合法
    let isLegal = hasInteger;

    // A小数部分
    if (s[cursor] === '.') {
        cursor++;
        hasFraction = scanUnsignedInteger();
        // 既没有整数部分又没有小数部分则错误
        if (!hasInteger && !hasFraction) {
            return false;
        }
        isLegal = true;
    }

    // 指数
    if (s[cursor] === 'e' || s[cursor] === 'E') {
        cursor++;
        if (!scanInteger()) return false;
    }

    // 空格
    if (s[cursor] === ' ') {
        scanSpace();
    }

    return cursor === s.length && isLegal;
}

test(isNumber);