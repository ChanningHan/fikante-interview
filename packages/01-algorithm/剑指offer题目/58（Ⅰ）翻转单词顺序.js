/**
 *
 * 输入一个英文句子，翻转句子中单词的顺序，
 * 但单词内字符的顺序不变。为简单起见，
 * 标点符号和普通字母一样处理。
 * 例如输入字符串"I am a student. "，则输出"student. a am I"。



示例 1：

输入: "the sky is blue"
输出:"blue is sky the"
示例 2：

输入: " hello world! "
输出:"world! hello"
解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
示例 3：

输入: "a good  example"
输出:"example good a"
解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。


说明：

无空格字符构成一个单词。
输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。

 *
 */

function trim(s) {
    let res;
    let i = 0;
    while (s[i] !== undefined && s[i] === ' ') {
        i++;
    }
    res = s.slice(i);
    i = res.length - 1;
    while (res[i] !== undefined && res[i] === ' ') {
        i--;
    }
    res = res.slice(0, i + 1);
    return res;
}

function reverse(arr) {
    if (!arr || !arr.length) return [];
    let ahead = 0;
    let behind = arr.length - 1;
    while (ahead < behind) {
        const temp = arr[ahead];
        arr[ahead] = arr[behind];
        arr[behind] = temp;
        ahead++;
        behind--;
    }
    return arr;
}

/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
    const wordArr = [];

    s = s.trim();

    let currentWord = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            currentWord += s[i];
        } else {
            currentWord && wordArr.push(currentWord);
            currentWord = '';
        }
    }
    wordArr.push(currentWord);
    const res = reverse(wordArr).join(' ');
    return res;
}

console.log(reverseWords('  a good   example  ') === 'example good a');
