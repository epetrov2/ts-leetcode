function firstUniqChar(s: string): number {
    const a = 'a'.charCodeAt(0);

    let first = Array<number>(26).fill(-1);
    let second = Array<number>(26).fill(-1);
    
    for (let i = 0; i < s.length; i++) {
        const index = s.charCodeAt(i) - a;
        if (first[index] === -1) first[index] = i
        else if (second[index] === -1) second[index] = i
    }

    let uniq = s.length;
    for (let i = 0; i < 26; i++) {
        if (second[i] === -1 && first[i] !== -1) uniq = Math.min(uniq, first[i]);
    }
    if (uniq === s.length) uniq = -1;

    return uniq;
};