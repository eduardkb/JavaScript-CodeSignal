// Test description:
// Given a string, find the number of different characters in it.

// Example
// For s = "cabca", the output should be
// solution(s) = 3.
// There are 3 different characters a, b and c.

// Parameters
const param = "cabca"

// My Solution
function solution(s) {
    return (new Set(s.split(""))).size
}

function solWithoutSet(s) {
    let iCnt = 0;
    while (s.length > 0) {
        s = s.replaceAll(s[0], '')
        iCnt++
    }
    return iCnt
}

// Best solution:
function bestSolution(s) {
    return new Set(s).size
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))
console.log("Solution without Set: ", solWithoutSet(param))