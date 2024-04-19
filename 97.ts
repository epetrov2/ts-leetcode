function isInterleave(s1: string, s2: string, s3: string): boolean {
    let q: number[][] = []

    const n = [s1.length, s2.length, s3.length]
    console.log(`n ${n}`);
    if (n[0] + n[1] !== n[2]) return false
    if (n[0] === 0 && n[1] === 0 && n[2] === 0) return true

    let i = [0, 0, 0, 0]
    let sec = false
    while (i[3] !== -1 || q.length > 0) {
        console.log(`${i}`);

        if (i[3] === -1) {
            i = q.pop()!
            console.log(`q(${q.length}) ${i} ${s1[i[0]]} ${s2[i[1]]} ${s3[i[2]]}`);
        }
        console.log(`b ${i} ${s1[i[0]]} ${s2[i[1]]} ${s3[i[2]]}`);
        
        if (i[3] === 0) {
        
            if ((i[0] < n[0]) && s1[i[0]] === s3[i[2]]) {
                if ((i[1] < n[1]) && s2[i[1]] === s3[i[2]]) {
                    console.log(`push ${i}`);
                    let p = Array.from(i)
                    p[3] = 1
                    q.push(p)
                }
                i[0]++
                i[2]++
            }

        }

         else if ((i[1] < n[1]) && (s2[i[1]] === s3[i[2]])) {
            i[1]++
            i[2]++
        } else {
            i[3] = -1
            continue
        }
        if ((i[2] === n[2])) return true
    }
    return false
};

console.log(isInterleave("abababababababababababababababababababababababababababababababababababababababababababababababababbb", "babababababababababababababababababababababababababababababababababababababababababababababababaaaba", "abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababbb"));
