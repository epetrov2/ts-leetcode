function findDiagonalOrder(nums: number[][]): number[] {
    let result: number[] = [];

    let lines = new Array<number>(nums.length);
    for (let i = 0; i < nums.length; i++) {
        lines[i] = i;
    }

    let i = 0;
    let line = 0;
    while (lines.length > 0) {
        let yi = i;
        while (yi >= 0) {
            const value = nums[lines[yi]][line - lines[yi]];

            //console.log(`i:${i} ${line} [${lines[yi]}, ${line - lines[yi]}]: ${value}`);
            if (value == undefined) {
                lines.splice(yi, 1);
                i--;
            } else {
                result.push(value);
            }
            yi--;
        }
        line++;
        if (i < lines.length - 1) i++;
    }

    return result;
};
console.log(findDiagonalOrder([[1, 2, 3, 4, 5], [6, 7], [8], [9, 10, 11], [12, 13, 14, 15, 16]]));

