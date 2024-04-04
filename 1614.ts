function maxDepth(s: string): number {
    let max = 0;
    let current = 0;
    for (const c of s) {
        if (c === "(") {
            current++;
            max = Math.max(max, current);
        } else if (c === ")") current--;
    }
    return max;
};

console.log(maxDepth("(1)+((2))+(((3)))"));
