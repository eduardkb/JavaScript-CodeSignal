// Test description:
// Given array of integers, remove each kth element from it.
// Example
// For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should be
// solution(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].

// Parameters
const p1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const p2 = 3

// My Solution
function solution(inputArray, k) {
    return inputArray.filter((e, i) => (i + 1) % k != 0)
}

// Best solution:
function bestSolution(inputArray, k) {
    return inputArray.filter((x, i) => (i + 1) % k)
}

// console log
console.log("My Solution: ", solution(p1, p2))
console.log("Best Solution: ", bestSolution(p1, p2))