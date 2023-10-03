function numIdenticalPairs(nums: number[]): number {
    let count = Array<number>(101).fill(0);
    
    for (let i = 0; i < nums.length; i++) count[nums[i]]++
    
    let sum = 0
    for (let i = 1; i < count.length; i++) if (count[i] > 1) {
        sum += count[i] * (count[i] - 1) / 2
    }

    return sum
};

console.log(numIdenticalPairs([1,1,1,1,1,2,2]));
