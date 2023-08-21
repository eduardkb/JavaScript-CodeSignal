// Test description:
// Define a word as a sequence of consecutive English 
// letters. Find the longest word from the given string.
// Example
// For text = "Ready, steady, go!", the output should be
// solution(text) = "steady".

// text: "ABCd" Expected return value "ABCd"
// text: "You are the best!!!!!!!!!!!! CodeFighter ever!" Expected return value "CodeFighter"

// Parameters
const param = "Ready, steady, go!"

// My Solution
function solution(text) {
    let sRes = text.replaceAll(/[d]/g,"")
    return sRes;
}

// Best solution:
function bestSolution(text) {
    return 1;
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))