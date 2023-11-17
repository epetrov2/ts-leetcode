function minPairSum(nums: number[]): number {
    let sum = 0;
    nums.sort((a, b) => a - b);
    const N = nums.length;
    for (let i = 0; i < (N / 2); i++) {
        sum = Math.max(sum, nums[i] + nums[N - i - 1]);
    }

    return sum;
};

console.log(minPairSum([3,5,4,2,4,6]));
