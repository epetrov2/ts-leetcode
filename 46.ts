function permute(nums: number[]): number[][] {
    let r: number[][] = []

    function per(got: number[], get: number[]): void {
        if (get.length === 1) {
            got.push(get[0])
            r.push(got)
        }
        else
        for (let i = 0; i < get.length; i++) {
            let newgot = Array.from(got)
            newgot.push(get[i])
            let newget = Array.from(get)
            newget.splice(i, 1)
            per(newgot, newget)
        }
    }

    per([], Array.from(nums))

    return r
};

console.log(permute([1, 2, 3]))
