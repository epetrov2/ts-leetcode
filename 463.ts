function islandPerimeter(grid: number[][]): number {
    const N = grid.length;
    const M = grid[0]!.length;
    function isGrid(y:number, x: number): number {
        if (y < 0 || y === N) return 0;
        if (x < 0 || x === M) return 0;
        return grid[y][x];
    }
    const ways:Array<[number, number]> = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let queue = Array<[number, number]>();
    let perimeter = 0;
    for (let i = 0; i < N; i++) 
        for (let j = 0; j < M; j++) {
            if (grid[i][j] === 1) {
                queue.push([i,j]);
                grid[i][j] = 2;
                break;
            }
    }
    while (queue.length) {
        const cur = queue.pop()!;
        for (let i = 0; i < 4; i++) {
            const c = isGrid(cur[0] + ways[i][0],cur[1]+ ways[i][1]);
            if (c === 0) perimeter++
            else if (c === 1) {
                grid[cur[0] + ways[i][0]][cur[1]+ ways[i][1]] = 2;
                queue.push([cur[0] + ways[i][0],cur[1]+ ways[i][1]]);
            }
        }
    }
    return perimeter;
};

console.log(islandPerimeter([[0,1]]));
//console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]));
