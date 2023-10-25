function kthGrammar(n: number, k: number): number {
    const binary = (k - 1).toString(2)
    return Array.from(binary).reduce((acc: string, c: string) => c === '1' ? acc === '1' ? '0' : '1' : acc  , "0") === '1' ? 1 : 0
};

kthGrammar(NaN, 19);

// 0	0	0
// 1	1	1
// 2	1	10
// 3	0	11
// 4	1	100
// 5	0	101
// 6	0	110
// 7	1	111
// 8	1	1000
// 9	0	1001
// 10	0	1010
// 11	1	1011
// 12	0	1100
// 13	1	1101
// 14	1	1110
// 15	0	1111
// 16	1	10000
// 17	0	10001
// 18	0	10010
// 19	1	10011