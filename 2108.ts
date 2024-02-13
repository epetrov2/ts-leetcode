function firstPalindrome(words: string[]): string {
    for (const word of words) {
        const half = Math.floor((word.length - 1) / 2);
        let i, j: number;
        for (i = 0, j = word.length - 1; i <= half; i++, j--) {
            if (word[i] !== word[j]) break;
        }
        if (i > half) return word;
    }
    return '';
};

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
