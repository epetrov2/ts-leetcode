function knightDialer(n: number): number {
    const MOD: number = 1e9 + 7;

    let next = Array<number>(10).fill(0);
    let prev = Array<number>(10).fill(1);

    for (let i = 1; i < n; i++) {
        next[0] = prev[4] + prev[6];
        next[1] = prev[6] + prev[8];
        next[2] = prev[7] + prev[9];
        next[3] = prev[4] + prev[8];
        next[4] = prev[0] + prev[3] + prev[9];
        next[6] = prev[0] + prev[1] + prev[7];
        next[7] = prev[2] + prev[6];
        next[8] = prev[1] + prev[3];
        next[9] = prev[2] + prev[4];
        
        for (let j = 0; j < 10; j++) prev[j] = next[j] % MOD
    }
    let count = (prev[0] + prev[1] + prev[2] + prev[3] + prev[4] + prev[5] + prev[6] + prev[7] + prev[8] + prev[9]) % MOD;
        
    console.log(next);
    
    return count;
};

console.log(knightDialer(2));
