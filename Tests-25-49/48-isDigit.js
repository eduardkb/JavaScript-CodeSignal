// Test description:
// Determine if the given character is a digit or not.
// Example
// For symbol = '0', the output should be
// solution(symbol) = true;
// For symbol = '-', the output should be
// solution(symbol) = false.

// Parameters
const param = '2'

// My Solution
function solution(symbol) {
    // WITH REGEX
    return /\d/g.test(symbol)

    // WITHOUT REGEX
    //return "01234567".includes(symbol)
    
}

// Best solution:
function bestSolution(symbol) {
    return !isNaN(symbol)
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))