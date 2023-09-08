function generate(numRows: number): number[][] {
    let res: number[][] = []
    for (let row = 1; row <= numRows; row++) {
        let line = Array<number>(row)
        line[0] = 1
        line[row - 1] = 1
        for (let i = 1; i < (row - 1); i++) {
            line[i] = res[row - 2][i-1] + res[row - 2][i]
        }
        res.push(line)
    }
    return res
};

console.log(generate(6));
