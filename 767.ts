function reorganizeString(s: string): string {
    let map = new Map<string, number>()
    for (const sym of s) {
        const c = map.get(sym)
        if (c !== undefined) map.set(sym, c + 1)
        else map.set(sym, 1)
    }
    let sort = [...map.entries()].sort((a, b) => b[1] - a[1])
    
    console.log(sort);


    let r = ''
    while (sort.length) {
        if (sort.length === 1 && sort[0][1] > 1) {
            console.log(`err: ` + sort);
            return ''
        }
        sort.sort((a, b) => b[1] - a[1])
        for (let i = 0; i < 2 && i < sort.length; i++) {
            console.log(sort[i]);
            
            r += sort[i][0]
            sort[i][1]--
            if (sort[i][1] === 0) sort.splice(i, 1)
        }
    }

    return r
};

console.log(reorganizeString('aaabbbccc')); //abacacbcb

