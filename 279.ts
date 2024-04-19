function numSquares(n: number): number {
    let squares = Array<number>(101);
    for (let i = 1; i <= 100; i++) {
        squares[i] = i * i;
    }
    let max = Math.floor(Math.sqrt(n));
    if (n === max * max) return 1;

    let sq = Array<number>(max + 1);

    let current = n;
    let num = 1;
    sq[max] = 1;
    current -= 0;

    return 0;
};

numSquares(7777);