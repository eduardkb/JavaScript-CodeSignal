// Test description:
// Given a string, return its encoding defined as follows:
// First, the string is divided into the least possible number of disjoint substrings 
// consisting of identical characters
// for example, "aabbbc" is divided into ["aa", "bbb", "c"]
// Next, each substring with length greater than one is replaced with a concatenation 
// of its length and the repeating character
// for example, substring "bbb" is replaced by "3b"
// Finally, all the new strings are concatenated together in the same order and a new 
// string is returned.
// Example
// For s = "aabbbc", the output should be
// solution(s) = "2a3bc".

// s: "wwwwwwwawwwwwww" Expected return value "7wa7w"
// s: "qwertyuioplkjhg" Expected return value "qwertyuioplkjhg"
// s: "bbjaadlkjdl" Expected return value "2bj2adlkjdl"
 
// Parameters
const param = 0

// My Solution
function solution(s) {
    return 1;
}

// Best solution:
function bestSolution(s) {
    return 1;
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))