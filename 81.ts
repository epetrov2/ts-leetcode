function search(nums: number[], target: number): boolean {
    if (nums[0] === target) return true
    let left = 1
    while (nums[left] === nums[0]) left++
    let right = nums.length - 1

    let searchInLeft: boolean = nums[0] < target

    while (left <= right) {
        const mid = Math.floor((right + left) / 2)
        console.log(`l:${left}, m:${mid}, r:${right}`)

        if (nums[mid] === target) return true

        if (!searchInLeft && nums[mid] > nums[0]) {
            left = mid + 1
        } else if (searchInLeft && nums[mid] <= nums[0]) {
            right = mid - 1
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    console.log(`exit l:${left}, r:${right}`)
    return false
};


console.log(search([2,2,2,3,2,2,2], 3))
//console.log(search([1,0,1,1,1], 0))
//console.log(search([2,5,6,0,0,1,2], 3))