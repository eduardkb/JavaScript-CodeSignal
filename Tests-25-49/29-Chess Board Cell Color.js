// Test description:
// Given two cells on the standard chess board, determine whether 
// they have the same color or not.

// Example
// For cell1 = "A1" and cell2 = "C3", the output should be
// solution(cell1, cell2) = true.
// For cell1 = "A1" and cell2 = "H3", the output should be
// solution(cell1, cell2) = false.

// My Notes
// chessboard A1= bottom left A8= top left h1= bottom right
// h8= top right
// Observations:
// Dark color: ("aceg" odd) and ("bdfh" even)
// Ligth color: ("bdfh" odd) and ("aceg" even)


// Parameters
const p1 = "A1"
const p2 = "C3"

// My Solution
function solution(cell1, cell2) {
    return Math.abs(Math.abs(("ABCDEFGH".indexOf(cell1[0]) + 1) - ("ABCDEFGH".indexOf(cell2[0]) + 1)) + Math.abs(cell1[1] - cell2[1])) % 2 === 0
}

// Best solution:
function bestSolution(cell1, cell2) {
    let board = {
        "A": 1,
        "B": 2,
        "C": 3,
        "D": 4,
        "E": 5,
        "F": 6,
        "G": 7,
        "H": 8
    };

    const total1 = board[cell1[0]] + parseInt(cell1[1]);
    const total2 = board[cell2[0]] + parseInt(cell2[1]);

    return total1 % 2 === total2 % 2;
}

// console log
console.log("My Solution: ", solution(p1, p2))
console.log("Best Solution: ", bestSolution(p1, p2))