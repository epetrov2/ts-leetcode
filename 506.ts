function findRelativeRanks(score: number[]): string[] {
    let dp: Array<[number, number]>;
    //for (const row of grid) {
        dp = score.map((value: number, index: number) => [value, index]);
    //}
    dp.sort((a, b) => b[0] - a[0]);

    let result = Array<string>(score.length);
    result[dp[0][1]] = "Gold Medal";
    if (result.length > 1) result[dp[1][1]] = "Silver Medal";
    if (result.length > 2) result[dp[2][1]] = "Bronze Medal";
    for (let i = 3; i < result.length; i++) {
        result[dp[i][1]] = (i + 1).toString();
    }
        
  return result;  
};

console.log(findRelativeRanks([10,3,8,9,4]));
