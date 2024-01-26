function findPaths(m: number, n: number, maxMove: number, startRow: number, startColumn: number): number {
    const MOD: number = 1e9 + 7;
    let moves = 0;

    const STEPS : Array<[number,number]> = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    let queue = new Array<[number, number, number]>();

    queue.push([startRow, startColumn, 1]);

    for (let moveCount = 1; moveCount <= maxMove; moveCount++) {
        let localmoves = 0;
        let nextQueue = new Array<[number, number, number]>();
        for (const q of queue) {
            for (const stepShift of STEPS) {
                const step: [number,number] = [q[0] + stepShift[0], q[1] + stepShift[1]];
                if (step[0] < 0) localmoves += q[2];
                else if (step[1] < 0) localmoves += q[2];
                else if (step[0] >= m) localmoves += q[2];
                else if (step[1] >= n) localmoves += q[2];
                else {
                    let move =  nextQueue.find(m => (m[0]=== step[0] && m[1]===step[1]));
                    if (move === undefined) nextQueue.push([step[0], step[1], q[2]])
                    else move[2] = (move[2] + q[2]) % MOD;
                }
            }
            console.log(`${moveCount} ${q} m:${moves}`);
            
        }
        queue = nextQueue;
        moves = (moves + localmoves) % MOD;
    }

    return moves;
};

console.log(findPaths(36,5,50,15,3));
//console.log(findPaths(1,3,3,0,1));
//console.log(findPaths(7,4,4,2,2));
390153306