function totalMoney(n: number): number {
    const weeks = Math.floor(n / 7);
    const extra = n % 7;

    let sum = 0;
    
    for (let i = 1; i < weeks; i++) {
        sum += i;
    }
    sum *= 7;
    sum += weeks * 28;

    for (let i = 1; i <= extra; i++) {
        sum += weeks + i;
    }

    return sum;
};

console.log(totalMoney(20));