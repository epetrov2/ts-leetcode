function minOperations(nums: number[]): number {
    nums.sort((a, b) => a - b)

    const delta = nums.length - 1

    let doubles = 0

    let chunksl: number[] = []
    let chunksr: number[] = []

    let prev = nums[0]
    chunksl.push(prev)
    //let chunk = prev

    if (nums[delta] - prev === delta) return 0

    for (let i = 1; i < nums.length; i++) {
        if (prev === nums[i]) doubles++
        else if (nums[i] - prev !== 1) {
            chunksr.push(prev)
            chunksl.push(nums[i])
        }
        prev = nums[i]
    }
    chunksr.push(nums[delta])

    {
        for (let i = 0; i < chunksl.length; i++) {
            console.log(`${chunksl[i]} - ${chunksr[i]}`);
        }
        console.log(`double: ${double}`)
    }

    let min = delta

    for (let i = 1; i < chunksl.length; i++) {
        let j = i; console.log(`${i}`)
        let extra = delta + 1
        let deficit = 0
        extra -= (chunksr[j - 1] - chunksl[j - 1] + 1)
        while (extra > 0) {
            let hole = chunksl[j] - chunksr[j - 1] - 1
            console.log(`${j} ex: ${extra} hole: ${hole}`)
            if (hole > extra) break
            
            extra -= (chunksr[j] - chunksl[j] + 1)

            deficit += hole
            
            
            j++

        }
        deficit -= doubles

        min = Math.min(min, extra)
    }
    return min
};

console.log(minOperations([1, 2, 3, 5, 6]));
//console.log(minOperations([1, 2, 5, 6, 10, 11, 12, 100, 100]));
//console.log(minOperations([4,2,5,3]));

