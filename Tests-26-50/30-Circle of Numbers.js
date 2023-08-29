// Test description:
// Consider integer numbers from 0 to n - 1 written down along the circle in 
// such a way that the distance between any two neighboring numbers is equal 
// (note that 0 and n - 1 are neighboring, too).
// Given n and firstNumber, find the number which is written in the radially 
// opposite position to firstNumber.

// Example
// For n = 10 and firstNumber = 2, the output should be
// solution(n, firstNumber) = 7.



// Parameters
const p1 = 18
const p2 = 6

// My Solution
function solution(n, firstNumber) {
    iNum = (n / 2) + firstNumber
    return (iNum >= n) ? iNum - n : iNum;
}

// Best solution:
function bestSolution(n, firstNumber) {
    return (n / 2 + firstNumber) % n
}

// console log
console.log("My Solution: ", solution(p1, p2))
console.log("Best Solution: ", bestSolution(p1, p2))