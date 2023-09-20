function minOperations(nums: number[], x: number): number {
    
    let ops = -1

    let sum = 0
    let checksum = 0
    let index = -1
    for (let i = 0; i < nums.length && checksum < x; i++) {
        checksum += nums[i]
        if (checksum === x) ops = i + 1

        if (checksum < x) {
            sum = checksum
            index = i
        }
    }

    //console.log(`sum: ${sum}, index: ${index}`);
    if (index === nums.length - 1) return ops
    
    
    
    let rightsum = 0

    for (let i = nums.length - 1; i >= 0; i--) {
        rightsum += nums[i]
        if (rightsum === x) {
            if (ops === -1) ops = nums.length - i
            else ops = Math.min(ops, nums.length - i)
        }
        if (rightsum < x) {

            while (rightsum + sum > x) {
                rightsum -= nums[index]
                index--
            }

            if (rightsum + sum === x) {
                if (ops === -1) ops = nums.length - i + 1 + index
                else ops = Math.min(ops, nums.length - i + 1 + index)
            }
            

        }
    }


    return ops
};

console.log(minOperations([3,2,20,1,1,3], 10));
