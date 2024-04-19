function numIslands(grid: string[][]): number {
    function fillIsland(i: number, j: number, island: string) {
      grid[i][j] = island
      if ((i > 0) && (grid[i - 1][j] === '1')) fillIsland(i - 1, j, island)
      if ((j > 0) && (grid[i][j - 1] === '1')) fillIsland(i, j - 1, island)
      if ((i < grid.length - 1) && (grid[i + 1][j] === '1')) fillIsland(i + 1, j, island)
      if ((j < grid[i].length - 1) && (grid[i][j + 1] === '1')) fillIsland(i, j + 1, island)
    }
    
    let islands = 0
    
      for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length ; j++) {
          if (grid[i][j] === '1') {
            islands++
            fillIsland(i, j, "2")
          }
        }
      
      }
    
      return islands
    };

    console.log(numIslands([
        ["1","1","1","1","0"],
        ["1","1","0","1","0"],
        ["1","1","0","0","0"],
        ["0","0","0","0","0"]
      ]));
    