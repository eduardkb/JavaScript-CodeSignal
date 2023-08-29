// Test description:
// You are given a two-digit integer n. 
// Return the sum of its digits.
// Example
// For n = 29, the output should be
// solution(n) = 11.

// Parameters
const param = 29

// My Solution
function solution(n) {
    return Math.floor(n / 10) + n % 10;
    // OR
    // return parseInt(n.toString()[0]) + parseInt(n.toString()[1])
}

// Best solution:
function bestSolution(n) {
    return n % 10 + Math.floor(n / 10)
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))