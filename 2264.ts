function largestGoodInteger(num: string): string {
    for (let i = 999; i >= 0; i -= 111) {
        const good = i === 0 ? "000" : i.toString();
        if (num.includes(good)) return good;
    }
    return '';
};

console.log(largestGoodInteger("10001"));
