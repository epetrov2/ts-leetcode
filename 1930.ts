function countPalindromicSubsequence(s: string): number {
    const LETTERS = 26;
    const A = 'a'.charCodeAt(0);
    let count = 0;

    let first = new Map<string, number>();
    let last = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        if (first.get(letter) === undefined) first.set(letter, i);
        else last.set(letter, i);
    }

    let lastArray = Array.from(last);
    let firstArray = Array.from(first);
    for (const borderLetter of lastArray) {
        const leftBorder = first.get(borderLetter[0])! + 1;
        for (const middleLetter of firstArray) {
            if (middleLetter[1] < borderLetter[1]) {
                if (middleLetter[1] >= leftBorder) count++;
                else {
                    const index = s.indexOf(middleLetter[0], leftBorder);
                    if (index > -1 && index < borderLetter[1]) count++;
                }
            }
        }
    }

    // let first = Array<number>(LETTERS);
    // let last = Array<number>(LETTERS);

    // for (let i = 0; i < s.length; i++) {
    //     const letter = s.charCodeAt(i);
    //     if (first[letter] === undefined) first[letter] = i;
    //     else last[letter] = i;
    // }

    // for (let i = 0; i < LETTERS; i++) {
    //     if (last[i] !== undefined) {

    //     }

    // }

    return count;
};

console.log(countPalindromicSubsequence('bbcbaba'));
