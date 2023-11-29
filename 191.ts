function hammingWeight(n: number): number {
    let result = 0;
    while (n !== 0) {
        if (n & 1) {
            result++;
        }
        n = n >>> 1;
    }
    return result;
};