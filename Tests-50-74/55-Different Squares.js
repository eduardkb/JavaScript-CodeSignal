// Test description:
// Given a rectangular matrix containing only digits, 
// calculate the number of different 2 × 2 squares in it.
// Example
// For
// matrix = [[1, 2, 1],
//           [2, 2, 2],
//           [2, 2, 2],
//           [1, 2, 3],
//           [2, 2, 1]]
// the output should be
// solution(matrix) = 6.
// Here are all 6 different 2 × 2 squares:
// 1 2
// 2 2
// 2 1
// 2 2
// 2 2
// 2 2
// 2 2
// 1 2
// 2 2
// 2 3
// 2 3
// 2 1

// Parameters
const param = [[1, 2, 1],
[2, 2, 2],
[2, 2, 2],
[1, 2, 3],
[2, 2, 1]];

// My Solution
function solution(matrix) {
    if (matrix.length < 2 || matrix[0].length < 2) {
        return 0;
    }
    let aSqu = []
    for (i = 0; i < matrix.length - 1; i++) {
        for (j = 0; j < matrix[i].length - 1; j++) {
            aSqu.push(matrix[i][j].toString() + matrix[i][j + 1].toString() +
                matrix[i + 1][j].toString() + matrix[i + 1][j + 1].toString())
        }
    }
    aSqu = aSqu.filter((value, index, array) => array.indexOf(value) === index);
    return aSqu.length;
}

// Best solution:
function bestSolution(a) {
    var s = new Set;
    for (var i = 0; i < a.length - 1; i++) {
        for (var j = 0; j < a[0].length - 1; j++) {
            var hash = a[i][j] + 10 * a[i][j + 1] + 100 * a[i + 1][j] + 1000 * a[i + 1][j + 1];
            s.add(hash);
        }
    }

    return s.size;
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))