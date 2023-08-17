function PredictTheWinner(nums: number[]): boolean {

    if (nums.length === 1) return true

    let sum: number[][] = []

    let turn = ((nums.length % 2) == 1) ? 1 : -1

    for (let i = 0; i < nums.length; i++) {
        sum[i] = Array<number>(nums.length)
        sum[i][i] = turn * nums[i]
    }

    for (let turns = 1; turns < nums.length; turns++) {
        turn = turn * -1
        console.log(`turn: ${turn}`)
        for (let i = 0; i < nums.length - turns; i++) {
            if (turn > 0) {
                console.log(`sum a: ${sum[i][i + turns - 1] + nums[i + turns]}`)
                console.log(`sum b: ${sum[i + 1][i + turns] + nums[i]}`)
                sum[i][i + turns] = Math.max(sum[i][i + turns - 1] + nums[i + turns], sum[i + 1][i + turns] + nums[i])
            } else {
                console.log(`sum a: ${sum[i][i + turns - 1] - nums[i + turns]}`)
                console.log(`sum b: ${sum[i + 1][i + turns] - nums[i]}`)
                sum[i][i + turns] = Math.min(sum[i][i + turns - 1] - nums[i + turns], sum[i + 1][i + turns] + nums[i])
            }

            
            console.log(`sum[${i},${i + turns}]: ${sum[i][i + turns]}`)
        }
    }


    return (sum[0][nums.length - 1] >= 0)
};

//console.log(PredictTheWinner([1,5,233,7]))
console.log(PredictTheWinner([1,5,2]))

