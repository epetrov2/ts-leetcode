function minDeletions(s: string): number {
    let deletions = 0
    const LETTERS = 26;
    const a = String('a').charCodeAt(0)

    let sym = Array<number>(LETTERS).fill(0)
    for (let i = 0; i < s.length; i++) {
        const index = s.charCodeAt(i) - a
        sym[index]++
    }

    sym = sym.sort((n1,n2) => n2 - n1);

    for (let i = 1; i < sym.length && sym[i] !== 0; i++) {
        if (sym[i - 1] <= sym[i]) {
            
            let diff = sym[i] - sym[i - 1]
            if (sym[i - 1] !== 0) diff++
            deletions += diff
            sym[i] -= diff
        }
    }
    
    return deletions
};

console.log(minDeletions("qqwweerty"));

//Runtime Beats 100.00%of users with TypeScript
