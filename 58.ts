function lengthOfLastWord(s: string): number {
    const s2 = s.trimEnd();
    return s2.length - s2.lastIndexOf(' ') - 1;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
