function pivotInteger(n: number): number {
    if (n === 1) return 1;
    let left = 0;
    let i = 1;
    for (; i < n - 1; i++) {
        left += i;
    }
    let right = n;
    while (left >= right) {
        if (left === right) return i;
        right += i;
        i--;
        left -= i;
    }
    return -1;
};
console.log(pivotInteger(1));
