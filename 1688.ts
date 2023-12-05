function numberOfMatches(n: number): number {
    let matches = 0;

    while (n > 1) {
        const halfn = Math.floor(n / 2);
        matches += halfn;
        n = halfn + (n % 2);
    }
    return matches;
}; // return n - 1; is the answer too

for (let i = 1; i < 201; i++) {
    console.log(`${numberOfMatches(i) - i}`);    
}


