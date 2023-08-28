// Test description:
// Sudoku is a number-placement puzzle. The 
// objective is to fill a 9 × 9 grid with digits 
// so that each column, each row, and each of the 
// nine 3 × 3 sub-grids that compose the grid 
// contains all of the digits from 1 to 9.
// This algorithm should check if the given grid 
// of numbers represents a correct solution to Sudoku.
// Example
// For
// grid = [[1, 3, 2, 5, 4, 6, 9, 8, 7],
//         [4, 6, 5, 8, 7, 9, 3, 2, 1],
//         [7, 9, 8, 2, 1, 3, 6, 5, 4],
//         [9, 2, 1, 4, 3, 5, 8, 7, 6],
//         [3, 5, 4, 7, 6, 8, 2, 1, 9],
//         [6, 8, 7, 1, 9, 2, 5, 4, 3],
//         [5, 7, 6, 9, 8, 1, 4, 3, 2],
//         [2, 4, 3, 6, 5, 7, 1, 9, 8],
//         [8, 1, 9, 3, 2, 4, 7, 6, 5]]
// the output should be
// solution(grid) = true;
// For
// grid = [[8, 3, 6, 5, 3, 6, 7, 2, 9],
//         [4, 2, 5, 8, 7, 9, 3, 8, 1],
//         [7, 9, 1, 2, 1, 4, 6, 5, 4],
//         [9, 2, 1, 4, 3, 5, 8, 7, 6],
//         [3, 5, 4, 7, 6, 8, 2, 1, 9],
//         [6, 8, 7, 1, 9, 2, 5, 4, 3],
//         [5, 7, 6, 9, 8, 1, 4, 3, 2],
//         [2, 4, 3, 6, 5, 7, 1, 9, 8],
//         [8, 1, 9, 3, 2, 4, 7, 6, 5]]
// the output should be
// solution(grid) = false.
// The output should be false: each of the nine 3 × 3 sub-grids 
// should contain all of the digits from 1 to 9.
// These examples are represented on the image below.



// Parameters
const param = [[1, 3, 4, 2, 5, 6, 9, 8, 7],
[4, 6, 8, 5, 7, 9, 3, 2, 1],
[7, 9, 2, 8, 1, 3, 6, 5, 4],
[9, 2, 3, 1, 4, 5, 8, 7, 6],
[3, 5, 7, 4, 6, 8, 2, 1, 9],
[6, 8, 1, 7, 9, 2, 5, 4, 3],
[5, 7, 6, 9, 8, 1, 4, 3, 2],
[2, 4, 5, 6, 3, 7, 1, 9, 8],
[8, 1, 9, 3, 2, 4, 7, 6, 5]]

// My Solution
function solution(grid) {
    function fValid(aValidate) {
        return ((aValidate.every(e => (e >= 1 && e <= 9)))
            && ((new Set(aValidate).size) == 9)) ? true : false;
    }

    for (let i = 0; i < grid.length; i++) {
        if (!fValid(grid[i])) {
            return false;
        }
    }
    let aTransposed = grid[0].map((col, i) => grid.map(row => row[i]));
    for (i = 0; i < aTransposed.length; i++) {
        if (!fValid(aTransposed[i])) {
            return false;
        }
    }

    aCompare = [];
    aMat = [[0, 0], [3, 0], [6, 0], [0, 3], [3, 3], [3, 6], [6, 0], [6, 3], [6, 6]]
    for (i = 0; i < 9; i++) {
        let x = aMat[i][0];
        let y = aMat[i][1];
        aCompare.push(grid[x][y])
        aCompare.push(grid[x][y + 1])
        aCompare.push(grid[x][y + 2])
        aCompare.push(grid[x + 1][y])
        aCompare.push(grid[x + 1][y + 1])
        aCompare.push(grid[x + 1][y + 2])
        aCompare.push(grid[x + 2][y])
        aCompare.push(grid[x + 2][y + 1])
        aCompare.push(grid[x + 2][y + 2])

        if (!fValid(aCompare)) {
            return false;
        }
        aCompare = []
    };


    return true;
}

// Best solution:
function bestSolution(grid) {
    for (let i = 0; i < 9; i++) {
        let col = new Set();
        let row = new Set();
        for (let j = 0; j < 9; j++) {
            row.add(grid[i][j]);
            col.add(grid[j][i]);
        }
        if (col.size < 9 || row.size < 9) {
            return false;
        }
    }

    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            let threeByThree = new Set();
            for (let k = 0; k < 3; k++) {
                for (let m = 0; m < 3; m++) {
                    threeByThree.add(grid[i + k][j + m]);
                }
            }
            if (threeByThree.size < 9) {
                return false;
            }
        }
    }

    return true;
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))