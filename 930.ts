function numSubarraysWithSum(nums: number[], goal: number): number {
    let a = Array<number>();
    let prev1 = -1;
    let i = 0
    for (; i < nums.length; i++) {
        if (nums[i] === 1) {
            a.push(i - prev1);
            prev1 = i;
        }
    }
    a.push(i - prev1);
    console.log(a);
    let sub = 0;
    if (goal === 0) {
        for (let i = 0; i < a.length; i++) {
            let cur = a[i] - 1;
            while (cur > 0) {
                sub += cur;
                cur--;
            }
        }
    } else {
        for (let i = 0; i < a.length - goal; i++) {
            sub += a[i] * a[i+goal];
        }
    }
    return sub;
};

console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0));
console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 1));
console.log(numSubarraysWithSum([0, 1, 0, 0, 1], 1));

