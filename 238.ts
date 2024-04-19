function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    let answer = Array<number>(n).fill(1);
    for (let i = 0; i < n - 1; i++) answer[i+1] = answer[i] * nums[i];
    let temp = 1;
    for (let i = n - 1; i >= 0; i--) {
        const mult = 
        temp = nums[i];
        nums[i] = mult;
    }

    return [];
};

console.log(productExceptSelf([1,2,3,4]));
