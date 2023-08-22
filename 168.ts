function convertToTitle(columnNumber: number): string {
    let s: string = ''
    const a = String('A').charCodeAt(0) - 1;
    let d = 0
    let r = 0

    do {
        if (columnNumber > 26) {
            r = Math.floor((columnNumber - 1) / 26)
            d = columnNumber - (r * 26)
            columnNumber = r
        } else {
            d = columnNumber
            columnNumber = 0
        }
        s = String.fromCharCode(a + d) + s
    } while (columnNumber > 0)
    return s
};

console.log(convertToTitle(702));
console.log(convertToTitle(703));
