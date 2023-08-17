function letterCombinations(digits: string): string[] {
    const l = digits.length - 1
    const map = new Map<string, string[]>([['2', ['a', 'b', 'c']], ['3', ['d', 'e', 'f']], ['4', ['g', 'h', 'i']], ['5', ['j', 'k', 'l']], ['6', ['m', 'n', 'o']], ['7', ['p', 'q', 'r', 's']], ['8', ['t', 'u', 'v']], ['9', ['w', 'x', 'y', 'z']]])

    let r: string[] = []

    function comb(letters: string, i: number): void {
        const ca = map.get(digits.charAt(i))
        if (ca === undefined) return
        for (let j = 0; j < ca.length; j++) {
            if (i === l) {
                r.push(letters + ca[j])
            } else comb(letters + ca[j], i + 1)
            
        }

    }

    if (digits !== '') comb('', 0)

    return r
};

console.log(letterCombinations(`29`))