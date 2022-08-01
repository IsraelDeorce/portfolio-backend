// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water),
// return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally
// or vertically. You may assume all four edges of the grid are all surrounded by water.

var numIslands = function(grid) {
  let landsCounter = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === '1') {
        dfs(row, col, grid);
        landsCounter++;
      }
    }
  }
  return landsCounter;
};

const dfs = (row, col, grid) => {
  if (
    row < 0 ||
    row >= grid.length ||
    col < 0 ||
    col >= grid[row].length ||
    grid[row][col] !== '1'
  ) return;

  grid[row][col] = '0';

  dfs(row - 1, col, grid);
  dfs(row, col + 1, grid);
  dfs(row + 1, col, grid);
  dfs(row, col - 1, grid);
}

numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
])
