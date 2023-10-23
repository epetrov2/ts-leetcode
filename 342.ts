function isPowerOfFour(n: number): boolean {
    return ((Math.log(n) / Math.log(4)) % 1 === 0)
};

isPowerOfFour(0);