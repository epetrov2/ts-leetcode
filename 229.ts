function majorityElement(nums: number[]): number[] {
    let map = new Map<number, number>()
    const n3 = Math.floor(nums.length / 3)
    let res: number[] = []

    for (let i = 0; i < nums.length; i++) {
        const v = map.get(nums[i])
        if (v === undefined) map.set(nums[i], 1)
        else map.set(nums[i], v + 1)
    }
    for (const el of map) {
        if (el[1] > n3) res.push(el[0])
    }
    return res
};

console.log(majorityElement([-9999, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1, 1]));
