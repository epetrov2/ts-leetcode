function longestIdealString(s: string, k: number): number {
    let long = Array<number>(26).fill(0);
    const a = 'a'.charCodeAt(0);
    const chars: Array<number> = Array.from(s).map(char => char.charCodeAt(0) - a);
    const n = s.length - 1;

    if (k === 25) return s.length;
    for (const c of chars) {
        let end = k + c;
        if (end > 25) end = 25;
        let max = 0;
        for (let i = c < k ? 0: c - k; i <= end; i++) {
            if (long[i] > max) max = long[i];
        }
        long[c] = max + 1;
    }
    return Math.max(...long);
};

console.log(longestIdealString('eduktdb', 15));
