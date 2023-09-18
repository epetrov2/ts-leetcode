function kWeakestRows(mat: number[][], k: number): number[] {
    const n = mat.length
    let rows = Array<{ index: number, soldiers : number}>(n)

    for (let i = 0; i < n; i++) rows.push({index: i, soldiers: mat[i].reduce((sum, c) => sum += c, 0)})
    
    rows.sort((a, b) => {
        if (a.soldiers === b.soldiers) return a.index - b.index
        else return a.soldiers - b.soldiers
    })
    let res = Array<number>()
    for (let i = 0; i < k; i++) res.push(rows[i].index)
    return res
};

console.log(kWeakestRows([[1,1,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,0],
    [1,1,0,0,0],
    [1,1,1,1,1]], 3));
