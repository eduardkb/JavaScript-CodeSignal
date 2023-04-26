// Test description:
// Find the leftmost digit that occurs in a given string.

// Example
// For inputString = "var_1__Int", the output should be
// solution(inputString) = '1';
// For inputString = "q2q-q", the output should be
// solution(inputString) = '2';
// For inputString = "0ss", the output should be
// solution(inputString) = '0'.

// Parameters
const param = "q2q-q"

// My Solution
function solution(inputString) {
    return inputString[inputString.search(/\d/)]
}

// Best solution:
function bestSolution(inputString) {
    return inputString.match(/\d/)[0]
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))