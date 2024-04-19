function countVowelPermutation(n: number): number {
    const MOD: number = 1e9 + 7;

    let sum = [1,1,1,1,1];
    let prev = [1,1,1,1,1];

    for (let i = 1; i < n; i++) {
        sum[0] = prev[1];
        sum[1] = prev[0] + prev[2];
        sum[2] = prev[0] + prev[1] + prev[3] + prev[4];
        sum[3] = prev[2] + prev[4];
        sum[4] = prev[0];

        for (let j = 0; j < 5; j++) prev[j] = sum[j] % MOD
    }
    let count = (prev[0] + prev[1] + prev[2] + prev[3] + prev[4]) % MOD;
        
    console.log(sum);
    
    return count;
};

console.log(countVowelPermutation(144));
