function isMonotonic(nums: number[]): boolean {
    let diff = 0
    let prev = nums[0]
    for (const num of nums) {
        const localdiff = num - prev
        prev = num
        if (localdiff === 0) continue
        if (diff === 0) diff = localdiff
        else if ((diff > 0 && localdiff < 0) || (diff < 0 && localdiff > 0)) return false
    }
    return true
};

console.log(isMonotonic([1,3,2]));
