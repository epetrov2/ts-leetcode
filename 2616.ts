function minimizeMax(nums: number[], p: number): number {
    function checkDiffPairs(diff: number): boolean {
        let pairs = p
        for (let i = 0; i < nums.length - 1; i++) {
            if (Math.abs(nums[i] - nums[i + 1]) <= diff) {
                pairs--
                if (!pairs) return true
                i++
            }
        }
        return false
    }

    nums.sort((a, b) => a - b)

    let left = 0
    let right = nums[nums.length - 1] - nums[0]

    while (right > left) {
        const diff = Math.floor((right + left) / 2)
        //console.log(`l:${left}, d:${diff}, r:${right}`)
        if (checkDiffPairs(diff)) right = diff
        else left = diff + 1
    }

    return right
};

console.log(minimizeMax([10,1,2,7,1,3], 2)) // 1
//console.log(minimizeMax([4,2,1,2], 1))
