function sortVowels(s: string): string {
    let map = new Map<string, number>([
        ['A', 0],
        ['E', 0],
        ['I', 0],
        ['O', 0],
        ['U', 0],
        ['a', 0],
        ['e', 0],
        ['i', 0],
        ['o', 0],
        ['u', 0]
    ]);
    //'AEIOUaeiou'

    let array = Array.from(s);

    for (const c of array) {
        const count = map.get(c);
        if (count !== undefined) map.set(c, count + 1);
    }

    let pasteIndex = 0;
    let pasteArray = Array.from(map);
    for (let i = 0; i < array.length; i++) {
        if ('AEIOUaeiou'.indexOf(array[i]) !== -1) {
            while (pasteArray[pasteIndex][1] === 0) pasteIndex++;
            if (pasteIndex >= 10) break;
            array[i] = pasteArray[pasteIndex][0];
            pasteArray[pasteIndex][1]--;
        }
    }

    return array.join('');
};


// let longString = 'A';
// for (let i = 0; i < 100000; i++) {
//     longString = longString.concat(String.fromCharCode('A'.charCodeAt(0) + Math.floor(Math.random() * 52)));
// }
//console.log(sortVowels(longString));
console.log(sortVowels("lEetcOde"));
