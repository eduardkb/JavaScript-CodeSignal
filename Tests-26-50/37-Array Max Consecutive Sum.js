// Test description:
// Given array of integers, find the maximal possible sum of some of its k consecutive elements.

// Example
// For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
// solution(inputArray, k) = 8.
// All possible sums of 2 consecutive elements are:
// 2 + 3 = 5;
// 3 + 5 = 8;
// 5 + 1 = 6;
// 1 + 6 = 7.
// Thus, the answer is 8.
// example 2
// inputArray: [1, 3, 4, 2, 4, 2, 4] k: 4
// solution: 13


// Parameters
const p1 = [1, 3, 4, 2, 4, 2, 4]
const p2 = 4


// My Solution
function solution(inputArray, k) {
    let arrSum = []
    for (let i = 0; i < (inputArray.length + 1) - k; i++) {
        let iSum = 0
        for (let j = 0; j < k; j++) {
            iSum += inputArray[j + i]
        }
        arrSum.push(iSum)
    }
    return Math.max(...arrSum);
}

// Best solution:
function bestSolution(inputArray, k) {
    s = m = inputArray.slice(0, k).reduce((x, y) => x + y)
    for (i = k; i < inputArray.length; i++) {
        s += inputArray[i] - inputArray[i - k]
        if (s > m) { m = s }
    }
    return m
}

// console log
console.log("My Solution: ", solution(p1, p2))
console.log("Best Solution: ", bestSolution(p1, p2))