// Test description:
// Let's define digit degree of some positive integer as the 
// number of times we need to replace this number with the sum 
// of its digits until we get to a one digit number.
// Given an integer, find its digit degree.

// Example
// For n = 5, the output should be
// solution(n) = 0;
// For n = 100, the output should be
// solution(n) = 1.
// 1 + 0 + 0 = 1.
// For n = 91, the output should be
// solution(n) = 2.
// 9 + 1 = 10 -> 1 + 0 = 1.

// Parameters
const param = 88

// My Solution
function solution(n) {
    let i = 0;
    while (n.toString().split('').length > 1) {
        arr = n.toString().split('').map((i) => parseInt(i))
        n = arr.reduce((s, v) => s += v, 0)
        i++
    }
    return i;
}

// Best solution:
function bestSolution(n) {
    c = 0
    while (n.toString().length > 1) {
        n = n.toString().split("").reduce((x, y) => Number(x) + Number(y))
        c++
    }
    return c
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))