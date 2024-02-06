function groupAnagrams(strs: string[]): string[][] {
    const a = 'a'.charCodeAt(0);
    let result: string[][] = [];
    let anagrams = Array<[Array<number>, Array<number>]>();
    for (let str = 0; str< strs.length;str++) {
        let letters = Array<number>(27).fill(0);
        letters[26] = strs[str].length;
        for (let i = 0; i < strs[str].length; i++) {
            const index = strs[str].charCodeAt(i) - a;
            letters[index]++;
        }
        let found = false;
        for (const anagram of anagrams) {
            let i;
            for (i = 26; i >= 0; i--) {
                if (letters[i] !== anagram[0][i]) break;
            }
            if (i < 0) {
                anagram[1].push(str);
                found = true;
                break;
            }
        }
        if (!found) anagrams.push([letters, [str]]);
    }
    for (let i = 0; i < anagrams.length; i++) {
        let group: string[] = [];
        for (let j = 0; j < anagrams[i][1].length; j++) {
            group.push(strs[anagrams[i][1][j]])
        }
        result.push(group);
    }

    return result;
};

//console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
