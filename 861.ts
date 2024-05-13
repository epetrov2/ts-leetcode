function matrixScore(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    let mult = 1;
    let sum = 0;
    for (let i = n - 1; i > 0; i--) {
        let col = 0;
        for (let j = 0; j < m; j++) {
            if (grid[j][0] === grid[j][i]) col++;    
        }
        col = Math.max(col, m - col);
        sum += col * mult;
        mult *= 2;
    }
    sum += m * mult;
    
    return sum;
};

console.log(matrixScore([[0,0,1,1],[1,0,1,0],[1,1,0,0]]));
