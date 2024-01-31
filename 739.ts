function dailyTemperatures(temperatures: number[]): number[] {
    let result = Array<number>(temperatures.length);
    let nums = Array<[number, number]>();
    
    for (let i = temperatures.length - 1; i >= 0; i--) {
        let id = -1;
        for (let j = nums.length - 1; j >= 0; j--) {
            if (nums[j][0] > temperatures[i]) {
                id = j;
                break;
            }
        }

        result[i] = id >= 0 ? nums[id][1] - i : 0;
        id++;
             
        if (id < nums.length) {
            nums[id][0] = temperatures[i];
            nums[id][1] = i;
            if (nums.length - 1 > id) nums.length = id + 1;
        } else nums.push([temperatures[i], i]);

        console.log(`[${i}]: ${temperatures[i]} ${nums}`);
        
    }
    return result;
};
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

