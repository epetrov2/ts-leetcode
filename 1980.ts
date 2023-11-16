function findDifferentBinaryString(nums: string[]): string {
    let array = Array<number>(nums.length)
    for (let i = 0; i < nums.length; i++) {
        array[i] = parseInt(nums[i], 2);
    }
    array.sort((a, b) => a - b);
    console.log(array);

    let i = 0;
    while (array.includes(i)) i++;

    let s = i.toString(2);
    while (s.length < nums[0].length) s = '0' + s;
    return s;
};

console.log(findDifferentBinaryString(["111", "011", "001"]));

