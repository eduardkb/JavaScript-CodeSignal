// Test description:
// You are given an array of integers. On each move you are allowed to increase 
// exactly one of its element by one. Find the minimal number of moves required to 
// obtain a strictly increasing sequence from the input.

// Example
// For inputArray = [1, 1, 1], the output should be
// solution(inputArray) = 3.
// For inputArray: [-1000, 0, -2, 0] RES = 5
// For inputArray: [2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15] RES = 13


// Parameters
const param = [2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15]


// My Solution
function solution(inputArray) {
    let iCount = 0;
    for (let i = 1; i < inputArray.length; i++) {
        if (inputArray[i] <= inputArray[i - 1]) {
            iCount += (inputArray[i - 1] - inputArray[i]) + 1
            inputArray[i] = inputArray[i - 1] + 1
        }
    }
    return iCount;
}

// Best solution:
function bestSolution(inputArray) {
    return inputArray.reduce(function (x, b, i, a) {
        while (b >= a[i + 1]) { x++; a[i + 1]++; };
        return x;
    }, 0)
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))