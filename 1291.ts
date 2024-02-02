function sequentialDigits(low: number, high: number): number[] {
    let result = Array<number>();
    let digits = 1;
    let first = low;
    while (first > 9) {
        first = Math.floor(first / 10);
        digits++;
    }

    let number = 0;
    do {

        for (let i = first; i <= (10 - digits); i++) {
            number = 0;
            for (let j = i, digit = 1; digit <= digits; j++, digit++) {
                number *= 10;
                number += j;
            }
            if (number < low) continue;
            if (number > high) return result;

            result.push(number);
        }
        digits++;
        if (digits > 9 ) return result;
        first = 1;
    } while (number < high);

    return result;
};

console.log(sequentialDigits(10, 1000000000));
