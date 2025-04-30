/* Easy
Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, 
return the number of negative numbers in grid.

Example 1:
Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.

Example 2:
Input: grid = [[3,2],[1,0]]
Output: 0
 
Constraints:
- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 100
- -100 <= grid[i][j] <= 100
*/

//Solution 1:
function countNegatives(grid: number[][]): number {
    let result = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] < 0) {
                result++;
            }
        }
    }
    return result;
};

//Solution 2:
function countNegatives2(grid: number[][]): number {
    let rows = grid.length;
    let cols = grid[0].length;
    let row = 0;
    let col = cols - 1;
    let count = 0;

    while (row < rows && col >= 0) {
        if (grid[row][col] < 0) {
            count += (rows - row);
            col--;
        } else {
            row++;
        }
    }

    return count;
}
