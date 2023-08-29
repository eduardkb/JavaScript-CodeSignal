// Test description:
// Given an array of integers, replace all the occurrences of 
// elemToReplace with substitutionElem.

// Example
// For inputArray = [1, 2, 1], elemToReplace = 1, and 
// substitutionElem = 3, the output should be
// solution(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].

// Parameters
const p1 = [1, 2, 1]
const p2 = 1
const p3 = 3

// My Solution
function solution(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map((e) => (e == elemToReplace) ? substitutionElem : e)
}

// Best solution:
function bestSolution(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map(i => i == elemToReplace ? substitutionElem : i)
}

// console log
console.log("My Solution: ", solution(p1, p2, p3))
console.log("Best Solution: ", bestSolution(p1, p2, p3))