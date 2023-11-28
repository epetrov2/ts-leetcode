function numberOfWays(corridor: string): number {
    const MOD: number = 1e9 + 7;
    let sum = 1;

    let firstSeat = 0;
    let secondSeat = -1;

    while (true) {
        firstSeat = corridor.indexOf('S', secondSeat + 1);
        if (firstSeat === -1) {
            if (secondSeat === -1) return 0;
            else return sum;
        }
        if (secondSeat !== -1) {
            const dividers = firstSeat - secondSeat;
            if (dividers > 1) sum = (sum * dividers) % MOD;
        }
        secondSeat = corridor.indexOf('S', firstSeat + 1);
        if (secondSeat === -1) return 0;

    }
    return sum;
};

console.log(numberOfWays('PPPPPPPP'));
