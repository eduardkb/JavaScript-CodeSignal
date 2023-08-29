// Test description:
// Given an integer n, return the largest number 
// that contains exactly n digits.
// Example
// For n = 2, the output should be
// solution(n) = 99.

// Parameters
const param = 2

// My Solution
function solution(n) {
    let sRes = '';
    for (let i = 0; i < n; i++) {
        sRes += '9';
    }
    return parseInt(sRes);
}

// Best solution:
function bestSolution(n) {
    return Math.pow(10, n) - 1
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))