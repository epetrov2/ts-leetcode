function isPowerOfTwo(n: number): boolean {
    const s = n.toString(2);
    return (s[0]==='1' && s.indexOf('1', 1) === -1);
};

isPowerOfTwo(16);
