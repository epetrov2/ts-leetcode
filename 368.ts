function largestDivisibleSubset(nums: number[]): number[] {
    nums.sort((a, b) => a - b);
    
    let numslength = nums.length;
    let array = new Array<number>(numslength).fill(1);
    let largest = 1;
    let id = 0;
    for (let i = 1; i < numslength; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0) {
                array[i] = Math.max(array[i], array[j]+1);
                if (array[i] > largest) {
                    largest = array[i];
                    id = i;
                }
            }
        }
    }

    let result = Array<number>();
    let max = nums[id];
    for (let i = id; i >= 0; i--) {
     
        if (max % nums[i] === 0 && array[i] === largest) {
            result.push(nums[i]);
            max = nums[i];
            largest--;
        }
        
    }

    return result;
};

console.log(largestDivisibleSubset([1,2,4,8,9,6,3,12,5]));
