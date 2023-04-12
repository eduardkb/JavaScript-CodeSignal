// Test description:
// Given a string, your task is to replace each of its characters by the next 
// one in the English alphabet; i.e. replace a with b, replace b with c, etc 
// (z would be replaced by a).

// Example
// For inputString = "crazy", the output should be 
// solution(inputString) = "dsbaz".

// Parameters
const param = "crazy"

// My Solution
function solution(inputString) {
    a = "abcdefghijklmnopqrstuvwxyz"
    return inputString.split('').map((e, i) => a.indexOf(e) == 25 ? a[0] : a[a.indexOf(e) + 1]).join('');
}

// Best solution:
function bestSolution(inputString) {
    var c = "abcdefghijklmnopqrstuvwxyza"
    return inputString.replace(/./g, x => c[c.indexOf(x) + 1])
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))