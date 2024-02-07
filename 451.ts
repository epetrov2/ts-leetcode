function frequencySort(s: string): string {
    let map = new Map<number, number>();

    for (let i = 0; i < s.length; i++) {
        const symbol = s.charCodeAt(i);
        const count = map.get(symbol);
        if (count === undefined) map.set(symbol, 1)
        else map.set(symbol, count + 1);
    }

    let array = Array.from(map);
    array.sort((a, b) => b[1] - a[1]);
    let result = '';
    for (const iterator of array) {
        result += String.fromCharCode(iterator[0]).repeat(iterator[1]);
    }
    return result;
};

console.log(frequencySort("Aagbbgsssffffgg"));
