function minFallingPathSum(grid: number[][]): number {
    const n = grid.length;
    if (n === 1) return grid[0][0];
    let dp = Array<Array<[number, number]>>();
    for (const row of grid) {
        dp.push(row.map((value: number, index: number) => [value, index]));
    }
    dp[0].sort((a, b) => a[0] - b[0]);
    console.log(dp);
    
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (dp[i][j][1] !== dp[i - 1][0][1]) dp[i][j][0] += dp[i - 1][0][0]
            else dp[i][j][0] += dp[i - 1][1][0];
        }
        dp[i].sort((a, b) => a[0] - b[0]);
        console.log(dp[i]);
    }

    return Math.min(dp[n - 1][0][0],dp[n - 1][1][0]);
};

console.log(minFallingPathSum([[-2,-18,31,-10,-71,82,47,56,-14,42],[-95,3,65,-7,64,75,-51,97,-66,-28],[36,3,-62,38,15,51,-58,-90,-23,-63],[58,-26,-42,-66,21,99,-94,-95,-90,89],[83,-66,-42,-45,43,85,51,-86,65,-39],[56,9,9,95,-56,-77,-2,20,78,17],[78,-13,-55,55,-7,43,-98,-89,38,90],[32,44,-47,81,-1,-55,-5,16,-81,17],[-87,82,2,86,-88,-58,-91,-79,44,-9],[-96,-14,-52,-8,12,38,84,77,-51,52]]));
