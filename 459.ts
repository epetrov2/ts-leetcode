function repeatedSubstringPattern(s: string): boolean {
    const n = s.length
    if (n === 1) return false
    let patternFound = false
    let pn = 1
    let pi = 0
    let pfi = 0
    for (let i = 1; i < n && pfi < n; ) {
        console.log(`i: ${i}`);
        
        if (!patternFound) {
            if (i * 2 > n) return false
            if (n % i === 0) {
                patternFound = true
                pn = i
                pi = 0
                pfi = i
            }
            i++
        }
        if (patternFound) {
            if ((s[pfi] === s[pi])) {
            console.log(`pn: ${pn}, s[${i+pfi}]:${s[i]}, s[${pi}]:${s[pi]}`);
                pi++
                pfi++
                if (pi >= pn) pi = 0
                
            } else patternFound = false

        }
    }
    return patternFound
};

console.log(repeatedSubstringPattern("abacababacab"));//'ababcababc'

//abacababacab