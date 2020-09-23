// On a 2-dimensional grid, there are 4 types of squares:

// 1 represents the starting square.  There is exactly one starting square.
// 2 represents the ending square.  There is exactly one ending square.
// 0 represents empty squares we can walk over.
// -1 represents obstacles that we cannot walk over.
// Return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once.

// Example 1:

// Input: [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
// Output: 2
// Explanation: We have the following two paths:
// 1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
// 2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)
// Example 2:

// Input: [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
// Output: 4
// Explanation: We have the following four paths:
// 1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
// 2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
// 3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
// 4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)
// Example 3:

// Input: [[0,1],[2,0]]
// Output: 0
// Explanation:
// There is no path that walks over every empty square exactly once.
// Note that the starting and ending square can be anywhere in the grid.


// Note:
// 1 <= grid.length * grid[0].length <= 20



/**
 * @param {number[][]} grid
 * @return {number}
 */

var uniquePathsIII = function(grid) {
  let obj = {}
  obj.count = 0
  let zeroCount = 0;
  let height = grid.length;
  let width = grid[0].length;

  for (let row = 0; row < height; row++){
      for (let col = 0; col < width; col++){
         if (grid[row][col] === 0){
              zeroCount++
          }
      }
  }

  for (let row = 0; row < height; row++){
      for (let col = 0; col < width; col++){
          if (grid[row][col] === 1){
              search(row, col, grid, obj, zeroCount)
          }
      }
  }
  return obj.count
};

var search = function (row, col, grid, obj, zeroCount){
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return;
  if (grid[row][col] === -1) return;
  if (grid[row][col] === 2 && zeroCount === -1){ //does not count starting, which not a zero
    obj.count++
    return;
  }

  let tmp = grid[row][col]
  grid[row][col] = -1
  search (row + 1, col, grid, obj, zeroCount - 1)
  search (row - 1, col, grid, obj, zeroCount - 1) //going back and forth with the above, unless change to -1
  search (row, col + 1, grid, obj, zeroCount - 1)
  search (row, col - 1, grid, obj, zeroCount - 1)
  grid[row][col] = tmp; //undo grid changes for the next path of searches

  return;
}