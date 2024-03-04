function bagOfTokensScore(tokens: number[], power: number): number {
    tokens.sort((a, b) => a - b);

    let score = 0;
    let maxScore = 0;
    let up = 0;
    let down = tokens.length - 1;

    while (up <= down){
        if (power >= tokens[up]) {
            power -= tokens[up];
            score++;
            up++;
        } else if (score > 0) {
            maxScore = Math.max(maxScore, score);
            power += tokens[down];
            score--;
            down--;
        } else break;
    }
    maxScore = Math.max(maxScore, score);
    return maxScore;    
};
console.log(bagOfTokensScore([100], 50));
console.log(bagOfTokensScore([100,200,300,400], 200));
console.log(bagOfTokensScore([100,200], 150));

