// Test description:
// Given a string, output its longest prefix which 
// contains only digits.

// Example
// For inputString = "123aa1", the output should be
// solution(inputString) = "123".

// Parameters
const param = '123aa1'

// My Solution
function solution(inputString) {
    let ret = []
    let arrStr = inputString.split('')
    let i = 0
    while (/[0-9]/.test(arrStr[i]) && i < inputString.length) {
        ret.push(arrStr[i])
        i++
    }
    return ret.join('');
}

// Best solution:
function bestSolution(inputString) {
    return inputString.match(/^\d*/)[0]
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))