// Test description:
// In the popular Minesweeper game you have a board with some mines and 
// those cells that don't contain a mine have a number in it that indicates 
// the total number of mines in the neighboring cells. Starting off with 
// some arrangement of mines we want to create a Minesweeper game setup.

// Example
// For matrix = [[true, false, false],
//           [false, true, false],
//           [false, false, false]]
// the output should be solution(matrix) = [[1, 2, 1],
//                     [2, 1, 1],
//                     [1, 1, 1]]
// Check out the image below for better understanding:

// Parameters
const param = [[true, false, false],
[false, true, false],
[false, false, false]]

// My Solution
function solution(matrix) {
    aRes = matrix.map((e1, i) => {
        return (e1.map((e2, j) => {
            let iCnt = 0
            for (let w = i - 1; w <= i + 1; w++) {
                for (let x = j - 1; x <= j + 1; x++) {
                    if (matrix[w] !== undefined) {
                        (matrix[w][x] && (!(i == w && j == x))) ? iCnt++ : null
                    }
                }
            }
            return (iCnt)

        }))
    })
    return aRes
}

// Best solution:
function bestSolution(matrix) {
    var dirs = [{ r: -1, c: -1 },
    { r: -1, c: 0 },
    { r: -1, c: 1 },
    { r: 0, c: 1 },
    { r: 0, c: -1 },
    { r: 1, c: -1 },
    { r: 1, c: 0 },
    { r: 1, c: 1 }];

    return matrix.map((a, r) => a.map((_, c) => dirs.reduce((p, v) => p += (matrix[r + v.r] || [])[c + v.c] | 0, 0)))
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))