// Test description:
// Define a word as a sequence of consecutive English 
// letters. Find the longest word from the given string.
// Example
// For text = "Ready, steady, go!", the output should be
// solution(text) = "steady".

// text: "ABCd" Expected return value "ABCd"
// text: "You are the best!!!!!!!!!!!! CodeFighter ever!" Expected return value "CodeFighter"

// Parameters
const param = "ab-CDE-fg_hi"

// My Solution
function solution(text) {
    text = text.replaceAll(/[^a-zA-Z\s]/g, " ").split(' ')
    let aLen = text.map(e => e.length)
    return (text[aLen.join('').search(Math.max(...aLen))])
}

// Best solution:
function bestSolution(text) {
    let patt = /[^a-z^A-Z]/
    text = text.split(patt);
    let longest = text.reduce(function (a, b) { return a.length > b.length ? a : b; });
    return longest
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))