// Test description:
// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

// Example
// For inputArray = [2, 4, 1, 0], the output should be
// solution(inputArray) = 3.

// Parameters
const param = [2, 4, 1, 0]

// My Solution
function solution(inputArray) {
    return Math.max(...inputArray.map((e, i) => { return i == 0 ? 0 : Math.abs(e - inputArray[i - 1]) }))
}

// Best solution:
function bestSolution(inputArray) {
    return Math.max(...inputArray.slice(1).map((x, i) => Math.abs(x - inputArray[i])))
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))