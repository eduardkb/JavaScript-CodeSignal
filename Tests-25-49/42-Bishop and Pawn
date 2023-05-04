// Test description:
// Given the positions of a white bishop and a black pawn on 
// the standard chess board, determine whether the bishop can 
// capture the pawn in one move.
// The bishop has no restrictions in distance for each move, 
// but is limited to diagonal movement. Check out the example 
// below to see how it can move:


// Example
// For bishop = "a1" and pawn = "c3", the output should be
// solution(bishop, pawn) = true.
// For bishop = "h1" and pawn = "h3", the output should be
// solution(bishop, pawn) = false.

// Parameters
const p1 = "e3"
const p2 = "a7"

// My Solution
function solution(bishop, pawn) {
    let arrCol = "abcdefgh"
    return Math.abs((arrCol.search(bishop[0]) + 1) - (arrCol.search(pawn[0]) + 1)) ==
        Math.abs((parseInt(bishop[1])) - (parseInt(pawn[1])))
}

// Best solution:
function bestSolution(bishop, pawn) {
    return Math.abs(bishop[0].charCodeAt() - pawn[0].charCodeAt()) === Math.abs(bishop[1] - pawn[1])
}

// console log
console.log("My Solution: ", solution(p1, p2))
console.log("Best Solution: ", bestSolution(p1, p2))