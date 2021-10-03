/**
 * 
 * 请实现一个函数用来匹配包含'. '和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（含0次）。在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但与"aa.a"和"ab*a"均不匹配。

示例 1:

输入:
s = "aa"
p = "a"
输出: false
解释: "a" 无法匹配 "aa" 整个字符串。
示例 2:

输入:
s = "aa"
p = "a*"
输出: true
解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
示例 3:

输入:
s = "ab"
p = ".*"
输出: true
解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
示例 4:

输入:
s = "aab"
p = "c*a*b"
输出: true
解释: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。
示例 5:

输入:
s = "mississippi"
p = "mis*is*p*."
输出: false
s 可能为空，且只包含从 a-z 的小写字母。
p 可能为空，且只包含从 a-z 的小写字母以及字符 . 和 *，无连续的 '*'。

 * 
 */


function test(func) {
    const testArr = [{
            input: {
                s: 'ab',
                p: 'a'
            },
            output: false
        },
        {
            input: {
                s: 'aa',
                p: 'a*'
            },
            output: true
        },
        {
            input: {
                s: "ab",
                p: '.*',
            },
            output: true
        },
        {
            input: {
                s: "aab",
                p: 'c*a*b',
            },
            output: true
        },
        {
            input: {
                s: "mississippi",
                p: "mis*is*p*."
            },
            output: false
        },
        {
            input: {
                s: "aaa",
                p: "ab*a*c*a"
            },
            output: true
        },
        {
            input: {
                s: "ab",
                p: ".*.."
            },
            output: true
        }

    ].slice(0)

    let passCount = 0;
    testArr.forEach((i, index) => {
        console.log(JSON.stringify(i))
        const res = func(i.input.s, i.input.p)
        console.log(`test${index+1}, res:${res}`, JSON.stringify(i))
        const isPass = res === i.output
        isPass && passCount++;
        console.log(isPass ? 'pass' : 'fail')
    })
    console.log(`total pass: ${passCount}/${testArr.length}`)
}


/**
 * @description 动态规划。如果p最后一个字符p[j]是正常字符，则看s最后一个字符s[i]是否与之相等，不相等则不匹配，相等则是s0...i-1和p0...j-1是否匹配的子问题（简写为f[i-1][j-1]）。
 * 如果p最后一个字符是"."，那么可以匹配任何字符，直接变为子问题f[i-1][j-1]。
 * 如果p最后一个字符是"*"，则需要将*前一位的字符打包进来成为一个整体来看待，则此时有两种选择：不匹配这个整体，匹配这个整体1次以上，
 * 则变成子问题f[i][j-2]或f[i-1][j-2]，使用递归的方式选择其中一个先进行下去，如果子问题为false则选择第二种方式进行下去，
 * 如果都为false则说明匹配失败，因此这两种使用或||来表达我们的这种选择方式。
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    function matchCore(i, j) {
        if (i === 0 && p[j] === '*') {
            while (j >= 0) {
                if (p[j] !== '*') return false
                if (j === 1 && p[j] === '*') return true
                j -= 2
            }
        }

        if (j < 0) {
            if (i < 0) return true
            return false
        } else {
            if (i < 0) {
                while (j >= 0) {
                    if (p[j] !== '*') return false
                    if (j === 1 && p[j] === '*') return true
                    j -= 2
                }
                return false
            }
        }

        if (p[j] === '.') return matchCore(i - 1, j - 1)

        if (p[j] !== '*') {
            if (p[j] === s[i]) {
                if (j === 0 && i === 0) return true;
                return matchCore(i - 1, j - 1)
            } else {
                return false
            }
        }

        // *
        if (p[j - 1] === s[i] || p[j - 1] === '.') {
            // if (i === 0 && j === 1) return true
            return matchCore(i, j - 2) || matchCore(i - 1, j)
        } else {
            return matchCore(i, j - 2)
        }

    }

    return matchCore(s.length - 1, p.length - 1)
};

// test(isMatch)


/**
 * @description 动态规划。如果p最后一个字符p[j]是正常字符，则看s最后一个字符s[i]是否与之相等，不相等则不匹配，相等则是s0...i-1和p0...j-1是否匹配的子问题（简写为f[i-1][j-1]）。
 * 如果p最后一个字符是"."，那么可以匹配任何字符，直接变为子问题f[i-1][j-1]。
 * 如果p最后一个字符是"*"，则需要将*前一位的字符打包进来成为一个整体来看待，则此时有两种选择：不匹配这个整体，匹配这个整体1次以上，
 * 则变成子问题f[i][j-2]或f[i-1][j-2]，使用递归的方式选择其中一个先进行下去，如果子问题为false则选择第二种方式进行下去，
 * 如果都为false则说明匹配失败，因此这两种使用或||来表达我们的这种选择方式。
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch2 = function(s, p) {
    function match(i, j) {
        if (i === 0) {
            return false
        }
        if (p[j - 1] === '.') {
            return true
        }
        return s[i - 1] === p[j - 1]
    }
    const f = []
    for (let i = 0; i <= s.length; i++) {
        f.push([])
        for (let j = 0; j <= p.length; j++) {
            f[i].push(undefined)
        }
    }
    f[0][0] = true
    for (let i = 0; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            if (p[j - 1] === '*') {
                f[i][j] = f[i][j - 2]
                if (match(i, j - 1)) {
                    f[i][j] = f[i][j] || f[i - 1][j]
                }
            } else {
                if (match(i, j)) {
                    f[i][j] = f[i - 1][j - 1]
                } else {
                    f[i][j] = false
                }
            }
        }

    }
    return f[s.length][p.length]
}

test(isMatch2)