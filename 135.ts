function candy(ratings: number[]): number {
    const n = ratings.length
    let c = Array<number>(n).fill(0)

    let cur = 0
    let stop = 0
    let left = false

    while (cur < n) {

        const moreThanLeft = (cur !== 0 && ratings[cur] > ratings[cur - 1])
        const moreThanRight = (cur !== (n - 1) && ratings[cur] > ratings[cur + 1])

        console.log(`${cur}, r: ${ratings[cur - 1]} - ${ratings[cur]} - ${ratings[cur + 1]}, c: ${c[cur - 1]} - ${c[cur]} - ${c[cur + 1]}, mtL: ${moreThanLeft} mtR: ${moreThanRight} left: ${left}`);

        if (!left) {
            if (!moreThanLeft && !moreThanRight) {
                c[cur] = 1
                if (cur !== 0 && c[cur - 1] === 0) {
                    left = true
                    stop = cur
                }
            } else if (moreThanLeft && !moreThanRight) c[cur] = c[cur - 1] + 1
        } else {
            if (!moreThanLeft && cur !== (n - 1)) c[cur] = c[cur + 1] + 1
            else {
                c[cur] = Math.max(c[cur - 1], c[cur + 1]) + 1
            }
            if (cur === 0 || c[cur - 1] !== 0) {
                left = false
                cur = stop
            }
        }
        console.log(`c[${cur}]: ${c[cur]}, left: ${left}`);
        console.log(c);
        if (!left) cur++
        else cur--

    }
    const sum = c.reduce((partialSum, a) => partialSum + a, 0);
    console.log(c);
    return sum
};

console.log(candy([1,6,10,8,7,3,2]));


