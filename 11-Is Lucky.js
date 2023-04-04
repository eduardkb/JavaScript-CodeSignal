// Test description:
// Ticket numbers usually consist of an even number of digits. A ticket number is considered 
// lucky if the sum of the first half of the digits is equal to the sum of the second half.
// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// solution(n) = true;
// For n = 239017, the output should be
// solution(n) = false.

// Parameters
const param = 12303

// My Solution
function solution(n) {
    const arr = n.toString()
    const s1 = arr.slice(0, arr.length / 2).split('').map(Number)
    const s2 = arr.slice(arr.length / 2).split('').map(Number)
    return s1.reduce((a, b) => a + b, 0) === s2.reduce((a, b) => a + b, 0)
}

// Best solution:
function bestSolution(n) {
    var count = 0;
    n = String(n).split('').map(t => { return parseInt(t) });
    n.forEach((el, i) => { (i < n.length / 2) ? count += el : count -= el });
    return count == 0;
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))