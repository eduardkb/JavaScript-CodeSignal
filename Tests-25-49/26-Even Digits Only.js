// Test description:
// Check if all digits of the given integer are even.

// Example
// For n = 248622, the output should be
// solution(n) = true;
// For n = 642386, the output should be
// solution(n) = false.

// Parameters
const param = 248622

// My Solution
function solution(n) {
    return n.toString().split('').every((e) => e % 2 == 0)
}

// Best solution:
function bestSolution(n) {
    return !(n + '').match(/[13579]/)
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))