function findJudge(n: number, trust: number[][]): number {
    let giveTrust = Array<number>(n+1).fill(0);
    let getTrust = Array<number>(n+1).fill(0);;
    for (const t of trust) {
        giveTrust[t[0]]++;
        getTrust[t[1]]++;
    }

    for (let i = 1; i <= n; i++) {
        if (giveTrust[i] === 0 && getTrust[i] === n - 1) return i;
    }
    return -1;
}

console.log(findJudge(4, [[1,3],[1,4],[2,1],[2,3],[2,4],[4,3]]));
console.log(findJudge(3, [[1,3],[2,3],[3,1]])); 
console.log(findJudge(4, [[2,1],[2,3],[3,1],[4,1]]));
console.log(findJudge(4, [[1,3],[2,3],[4,3]]));
