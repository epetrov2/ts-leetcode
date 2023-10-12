// function findInMountainArray(target: number, mountainArr: MountainArray): number {
//     const N = mountainArr.length()
//     let left = 0
//     let right = N - 1
//     let mid = 0
//     let map = new Map<number, number>()

//     function getCached(i: number): number {
//         const v = map.get(i)
//         if (v === undefined) {
//             const a = mountainArr.get(i)
//             map.set(i, a)
//             return a
//         }
//         else return v
//     }

function findInMountainArray(target: number, mountainArr: number[]): number {
    const N = mountainArr.length
    let left = 0
    let right = N - 1
    let mid = 0
    let map = new Map<number, number>()

    function getCached(i: number): number {
        const v = map.get(i)
        if (v === undefined) {
            const a = mountainArr[i]
            map.set(i, a)
            return a
        }
        else return v
    }

    //for (let i = 0; left != right && i < 7; i++) {
    while (left != right) {
        mid = Math.floor((right + left) / 2)
        console.log(`l: ${left}, m: ${mid}, r: ${right}, a[m+1]: ${getCached(mid + 1)}, a[${mid}]:${getCached(mid)}`)

        if (getCached(mid + 1) > getCached(mid)) left = mid + 1
        else right = mid
    }
    console.log(`l: ${left}, m: ${mid}, r: ${right}, a[m+1]: ${getCached(mid + 1)}, a[${mid}]:${getCached(mid)}`)
    const max = left

    if (target === getCached(max)) return max

    const cache = Array.from(map).sort((a, b) => a[0] - b[0])
    console.log(cache)

    left = 0
    right = max
    for (const iterator of cache) {
        if (iterator[0] === max) break
        if (iterator[1] < target) left = iterator[0]
        else if (iterator[1] === target) return iterator[0]
        else {
            right = iterator[0]
            break
        }
    }

    console.log(`left l: ${left}, r: ${right}`)

    while (left <= right) {
        mid = Math.floor((right + left) / 2)
        console.log(`l: ${left}, m: ${mid}, r: ${right}, a[${mid}]:${getCached(mid)}`)
        if (getCached(mid) === target) return mid
        else if (getCached(mid) < target) left = mid + 1
        else right = mid - 1
    }

    left = max
    right = N - 1
    for (const iterator of cache) {
        if (iterator[0] > max) {
            if (iterator[1] > target) left = iterator[0]
            else if (iterator[1] === target) return iterator[0]
            else {
                right = iterator[0]
                break
            }
        }
    }

    console.log(`right l: ${left}, r: ${right}`)

    while (left <= right) {
        mid = Math.floor((right + left) / 2)
        console.log(`l: ${left}, m: ${mid}, r: ${right}, a[${mid}]:${getCached(mid)}`)
        if (getCached(mid) === target) return mid
        else if (getCached(mid) > target) left = mid + 1
        else right = mid - 1
    }

    return -1
};

//console.log(peakIndexInMountainArray([0,1,10,5,2]))
console.log(findInMountainArray(56, [1, 2, 3, 4, 5, 6, 7, 8, 9, 100, 99, 57, 11, 3, 1]))