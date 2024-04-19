function largestOddNumber(num: string): string {
    for (let i = num.length - 1; i >= 0; i--) {
        if ('13579'.includes(num[i])) return num.substring(0,i + 1);
    }
    return '';
};