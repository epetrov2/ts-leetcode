function searchRange(nums: number[], target: number): number[] {
    let res = [-1, -1]

    let left = 0
    let right = nums.length - 1
    // if (right === 0) {
    //     if (nums[0] === target) return [0, 0]
    //     else return [-1, -1]
    // }

    while (right >= left) {
        const mid = Math.floor((right + left) / 2)
        //console.log(`l:${left}, d:${diff}, r:${right}`)
        if (nums[mid] === target) {
            res[0] = mid
            res[1] = right
            right = mid
            break
        }
        if (nums[mid] > target) right = mid - 1
        else left = mid + 1
    }
    while (right >= left) {
        const mid = Math.floor((right + left) / 2)
        if (nums[mid] === target) {
            if ((mid === 0) || ((nums[mid - 1] !== target))) {
                left = res[0]
                right = res[1]
                res[0] = mid
                break
            } else right = mid - 1          
        } else left = mid + 1
    }
    while (right >= left) {
        const mid = Math.floor((right + left) / 2)
        if (nums[mid] === target) {
            if ((mid === (nums.length - 1)) || ((nums[mid + 1] !== target))) {
                res[1] = mid
                break
            } else left = mid + 1
        } else right = mid - 1
    }
    return res
};

console.log(searchRange([1,3], 1));