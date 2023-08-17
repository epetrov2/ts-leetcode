function change(amount: number, coins: number[]): number {
    let count = 0
    const n = coins.length
    let counts = Array<number>(n).fill(0)
    let sum = Array<number>(n).fill(0)
    coins.sort((a, b) => b - a)

    let curAm = amount

    let i = 0;
    counts[i] = Math.floor(curAm / coins[i])
    for (let temp = 0; temp < 10; temp++) {
        if (counts[i] > 0) counts[i]--

        if (counts[i] !== 0) {
            sum[i] = coins[i] * counts[i]
            if (curAm - sum[i] === 0) {
                if (i === n - 1) count += counts[i]
                else count++
                console.log(`+ i: ${i}, c: ${count}, ${sum}`);
            } else {
                i++
            }
        }
    }

    //(i < coins.length)




    return count
};

console.log(change(15, [2, 5]))