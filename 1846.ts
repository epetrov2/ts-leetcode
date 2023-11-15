function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
    arr.sort((a, b) => a - b);

    let max = 0;
    for (const value of arr) {
        if (value > max) max++;
    }
    return max;
};


console.log(maximumElementAfterDecrementingAndRearranging([1,2,3,4,5]));
console.log(maximumElementAfterDecrementingAndRearranging([2,2,1,2,1]));
console.log(maximumElementAfterDecrementingAndRearranging([100,1,1000]));
