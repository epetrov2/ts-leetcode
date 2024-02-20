function missingNumber(nums: number[]): number {
    nums.sort((a, b) => a -b);
    let left = 1;
    let right = nums.length - 1;

    if (nums[0] === 1) return 0;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        console.log(`l:${left}, r:${right}, m${mid}:, n:${nums[mid]}, n-1:${nums[mid-1]}`);
        if (nums[mid] === mid) left = mid + 1;
        else {
            if (nums[mid-1]===mid-1) return mid;
            right = mid - 1;
        }
    }
    return nums.length;  
};

//console.log(missingNumber([9,6,4,2,3,5,7,0,1]));
console.log(missingNumber([1]));
