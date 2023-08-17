function peakIndexInMountainArray(arr: number[]): number {
    
    let left = 0

    let right = arr.length - 1
    let max = 1
    for (let i = 0; left != right && i < 6; i++) {
        max = Math.floor((right + left) / 2)
        console.log(`l: ${left}, m: ${max}, r: ${right}, a[m+1]: ${arr[max + 1]}, a[${max}]:${arr[max]}`)

        if (arr[max + 1] > arr[max]) left = max + 1
        else right = max
    }
    console.log(`l: ${left}, m: ${max}, r: ${right}, a[m+1]: ${arr[max + 1]}, a[${max}]:${arr[max]}`)
    return left
};

//console.log(peakIndexInMountainArray([0,1,10,5,2]))
console.log(peakIndexInMountainArray([3,4,5,1]))