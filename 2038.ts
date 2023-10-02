function winnerOfGame(colors: string): boolean {
    let winA = 0;
    let winB = 0;

    for (let i = 1; i < colors.length - 1; i++) {
        if (colors[i - 1] === 'A' && colors[i] === 'A' && colors[i + 1] === 'A') winA++
        if (colors[i - 1] === 'B' && colors[i] === 'B' && colors[i + 1] === 'B') winB++
    }

    return winA > winB;
};

console.log(winnerOfGame("ABBBBBBBAAA"));
