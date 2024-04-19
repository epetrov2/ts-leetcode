function getRow(rowIndex: number): number[] {
    
        let prev: number[] = [1]
        for (let row = 1; row <= rowIndex + 1; row++) {
            let line = Array<number>(row)
            line[0] = 1
            line[row - 1] = 1
            for (let i = 1; i < (row - 1); i++) {
                line[i] = prev[i-1] + prev[i]
            }
            prev = line
        }
        return prev
    };

console.log(getRow(0));
console.log(getRow(1));
console.log(getRow(2));
console.log(getRow(3));
