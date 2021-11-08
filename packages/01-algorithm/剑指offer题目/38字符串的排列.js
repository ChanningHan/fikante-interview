/**
 * 
 * 输入一个字符串，打印出该字符串中字符的所有排列。

 

你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

 

示例:

输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]
 

限制：

1 <= s 的长度 <= 8

 * 
 */

/**
 * @description 分两部分：第一个字符和后面所有字符。
 * 第一步固定第一个字符，遍历每一个字符，与第一个交换；
 * 固定了第一个字符后后面的字符串也分成这样的两部分，
 * 这是一个递归的过程。
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    const res = []
    if (!s) return res
    if (s.length === 1) {
        res.push(s);
        return;
    }

    function recursive(arr, beginIndex) {
        if (beginIndex >= arr.length - 1) {
            res.push(arr.join(''))
            return;
        }

        const exchangedMap = new Map()
        for (let i = beginIndex; i < arr.length; i++) {
            if (beginIndex !== i && arr[beginIndex] === arr[i]) continue;
            if (exchangedMap.get(copyArr[i])) continue;

            const copyArr = [...arr]
            exchangedMap.set(copyArr[i], true)



            const temp = copyArr[beginIndex]
            copyArr[beginIndex] = copyArr[i]
            copyArr[i] = temp

            recursive(copyArr, beginIndex + 1)
        }


    }

    recursive(Array.from(s).sort(), 0)

    return res
};

function test() {
    const testArr = [{
            input: 'abc',
            output: ["abc", "acb", "bac", "bca", "cab", "cba"]
        },
        {
            input: "aab",
            output: ["aba", "aab", "baa"]
        },
        {
            input: "kzfxxx",
            output: []
        }
    ]

    testArr.forEach((item, index) => {
        console.log(`test${index+1}, ${JSON.stringify(item)}`);
        const res = permutation(item.input)
        console.log('res', res);
        console.log(res.join('') === item.output.join('') ? 'pass' : 'fail');
    })

}

test()