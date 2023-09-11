function groupThePeople(groupSizes: number[]): number[][] {
    let res: number[][] = []

    let ar = new Array<number[]>(33).fill([])

    for (let i = 0; i < groupSizes.length; i++) {
        if (ar[groupSizes[i]].length === 0) ar[groupSizes[i]] = Array.from([i])
        else ar[groupSizes[i]].push(i)
    }

    for (let i = 0; i < ar.length; i++) {
        if (ar[i].length > 0) {
            if (ar[i].length === i)
                res.push(ar[i])
            else {
                const m = Math.floor(ar[i].length / i)
                for (let j = 1; j <= m; j++) res.push(ar[i].slice((j - 1) * i, j * i))
            }

        }
    }

    //console.log(ar);

    return res
};

console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));
