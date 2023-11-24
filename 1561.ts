function maxCoins(piles: number[]): number {
    let sum = 0;
    const n = piles.length / 3;
    piles.sort((a, b) => b - a);
    for (let i = 0, j = 1; i < n; i++, j += 2) {
        sum += piles[j];
        console.log(`i: ${i}, j:${j}, p[j]: ${piles[j]}`);
    }
    return sum;
};

console.log(maxCoins([9,8,7,6,5,1,2,3,4]));
