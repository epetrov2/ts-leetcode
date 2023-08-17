function wordBreak(s: string, wordDict: string[]): boolean {
    let queue = new Array<number>()
    queue.push(0)
    let cleared = new Set<number>()
    
    while (queue.length > 0) {
        const cur = queue.pop()!
        cleared.add(cur)

        console.log(`cur: ${cur}, cleared: ${Array.from(cleared)}`)

        for (let i = 0; i < wordDict.length; i++) {
            if ((s.length - cur) < wordDict[i].length) continue
            if (cleared.has(cur + wordDict[i].length) || (queue.indexOf(cur + wordDict[i].length) !== -1)) continue
            let j
            for (j = 0; j < wordDict[i].length; j++) {
                if (s[cur + j] !== wordDict[i][j]) break
            }
            if (j === wordDict[i].length) {
                if (s.length === cur + j) return true
                else {
                    console.log(`found: ${wordDict[i]}`)
                    if (!cleared.has(cur + j) && (queue.indexOf(cur + j) === -1)) {
                    console.log(`added`)
                    queue.push(cur + j)
                    }
                }
            }
        }
    }

    return false
};

//console.log(wordBreak('leetcode', ["leet","code"]))
//console.log(wordBreak('catsandog', ["cats","dog","sand","and","cat"]))
console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]))
//console.log(wordBreak("aaaaaaaaaaaaaaaaaaaab", ["a", "aa", "aaa"]))