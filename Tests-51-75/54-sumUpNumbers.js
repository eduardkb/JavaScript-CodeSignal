// Test description:
// CodeMaster has just returned from shopping. He scanned the 
// check of the items he bought and gave the resulting string to 
// Ratiorg to figure out the total number of purchased items. 
// Since Ratiorg is a bot he is definitely going to automate it, 
// so he needs a program that sums up all the numbers which 
// appear in the given input.
// Help Ratiorg by writing a function that returns the sum of 
// numbers that appear in the given inputString.
// Example
// For inputString = "2 apples, 12 oranges", the output should 
// be solution(inputString) = 14.

// Parameters
const param = "2+15+8a"

// My Solution
function solution(inputString) {
    let aNum = inputString.split(/[^\d]/).filter(Boolean);
    return aNum.reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

// Best solution:
function bestSolution(inputString) {
    return (inputString.match(/\d+/g) || []).reduce((a, b) => a + +b, 0)
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))