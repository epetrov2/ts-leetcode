function fullJustify(words: string[], maxWidth: number): string[] {
    let first = 0
    let inLine = 1
    let res: string[] = []
    let line = ''
    let curLength = 0

    while (first < words.length) {
        curLength = words[first].length
        inLine = 1
        while (first + inLine < words.length) {
            let checkInLine = inLine + 1
            let checkLength = curLength + 1 + words[first + checkInLine - 1].length
            if (checkLength <= maxWidth) {
                inLine = checkInLine
                curLength = checkLength
            } else break
        }

        if (inLine === 1) {
            line = words[first] + ' '.repeat(maxWidth - curLength)
        } else if (first + inLine === words.length) {
            line = words[first]
            for (let i = 0; i < inLine - 1; i++) {
                line += ' ' + words[first + i + 1]
            }
            line += ' '.repeat(maxWidth - curLength)
        } else {
            line = words[first]

            const spaces = inLine - 1
            let extraSpaces = maxWidth - curLength
            const insertSpaces = Math.floor(extraSpaces / spaces)
            extraSpaces -= insertSpaces * spaces
            for (let i = 0; i < spaces; i++) {
                line += ' '.repeat(insertSpaces + 1)
                if (extraSpaces) {
                    line += ' '
                    extraSpaces--
                }
                line += words[first + i + 1]
            }
        }

        res.push(line)
        first += inLine
    }
    return res
};

//console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));
//console.log(fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16));
console.log(fullJustify(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], 20))
