// Test description:
// Construct a square matrix with a size N × N 
// containing integers from 1 to N * N in a spiral 
// order, starting from top-left and in clockwise 
// direction.
// Example
// For n = 3, the output should be
// solution(n) = [[1, 2, 3],
//                [8, 9, 4],
//                [7, 6, 5]]


// 01 02 03 04 05
// 16 17 18 19 06
// 15 24 25 20 07
// 14 23 22 21 08
// 13 12 11 10 09

// 1  2  3  4  5  6
// 20 21 22 23 24 7
// 19 32 33 34 25 8
// 18 31 36 35 26 9
// 17 30 29 28 27 10
// 16 15 14 13 12 11



// Parameters
const param = 5;

// My Solution
function solution(n) {
    let aRes = Array.from(Array(n), () => Array.from(Array(n)));
    for (let i = 0; i < n; i++) {
        aRes[0][i] = i + 1;
    }
    let iQtde = (n - 1) * 2;
    let iNum = n + 1;
    let iCnt = 1;
    let aDir = [[0, 1], [-1, 0], [0, -1], [1, 0]];
    let iDir = 0;
    let x = n - 1;
    let y = 0;
    while (iQtde >= 1) {
        x += aDir[iDir][0]
        y += aDir[iDir][1]
        aRes[y][x] = iNum;

        if (iCnt == Math.round(iQtde / 2)) {
            iDir == 3 ? iDir = 0 : iDir++;
            iCnt = 1;
            iQtde--;
        }
        else {
            iCnt++
        }
        iNum++;
    }
    return aRes;
}

// Best solution:
function bestSolution(n) {
    var matrix = [...Array(n)].map(_ => []),
        x = 0,
        y = 0,
        dir = 2,
        size = n,
        c = 0;
    for (var i = 1; i <= n * n; i++) {
        matrix[y][x] = i;
        if (++c == size) {
            dir = (dir + 1) % 4;
            size -= dir % 2;
            c = 0;
        }
        if (dir % 2 == 0) x += dir > 1 ? 1 : -1;
        else y += dir > 1 ? 1 : -1;
    }
    return matrix;
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))