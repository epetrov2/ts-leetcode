function integerBreak(n: number): number {
    if (n === 2) return 1

    let div = Math.floor(n / 2)
    let a = Array<number>(div).fill(2)
    if (n % 2) a.push(1)
    let insert = 0
    let prodMax = 0

    while (a.length > 1) {
        const prod = a.reduce((acc, cur) => acc * cur, 1)
        if (prod > prodMax) prodMax = prod
        else break
        //console.log(`p: ${prod}: ${a}`);

        do {
            if (insert >= (a.length - 1)) insert = 0
            a[a.length - 1]--
            a[insert]++
            insert++
        } while (a[a.length - 1] === 1)
        if (a[a.length - 1] === 0) {
            a.pop()
            if (a.length === 1) break
        }
    }

    return prodMax

};

//integerBreak(4)
for (let i = 2; i <= 11; i++) console.log(i + ': ' + integerBreak(i));

// Accepted (Runtime Beats 94.74% of users with TypeScript)
