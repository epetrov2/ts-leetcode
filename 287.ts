function findDuplicate(nums: number[]): number {
    const n = nums.length
    let sum = 0
    for (let i = 0; i < n; i++) {
        sum += nums[i] - i
    }

    return sum
};

console.log(findDuplicate([3,1,3,4,2]));

