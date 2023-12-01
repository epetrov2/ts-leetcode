function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
    let w1 = 0;
    let i = 0;
    let w2 = 0
    let j = 0;

    while (w1 < word1.length && w2 < word2.length) {
        console.log(`${w1} ${i} ${word1[w1][i]} ${w2} ${j} ${word2[w2][j]}`);
        
        if (word1[w1][i] !== word2[w2][j]) return false;
        i++;
        if (i >= word1[w1].length) {
            w1++;
            i = 0;
        }
        j++;
        if (j >= word2[w2].length) {
            w2++;
            j = 0;
        }
    }
    if (w1 < word1.length || w2 < word2.length) return false;
    return true;
};

console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["a","bcddef"]));
