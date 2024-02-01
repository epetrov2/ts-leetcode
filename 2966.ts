function divideArray(nums: number[], k: number): number[][] {
    nums.sort((a, b) => a - b);
    const THREE = nums.length / 3;
    let result: number[][] = [];
    for (let i = 0; i < THREE; i++) {
        let n3 = [nums[i*3], nums[i*3+1], nums[i*3+2]];
        console.log((n3[2] - n3[0]) > k);
        
        if (n3[1] - n3[0] > k || n3[2] - n3[0] > k) return [];
        result.push(n3);
    }

    return result;
};

console.log(divideArray([1,3,3,2,7,3], 3));

//console.log(divideArray([1,3,4,8,7,9,3,5,1], 2));
