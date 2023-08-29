// Test description:
// Correct variable names consist only of English letters, 
// digits and underscores and they can't start with a digit.
// Check if the given string is a correct variable name.

// Example
// For name = "var_1__Int", the output should be
// solution(name) = true;
// For name = "qq-q", the output should be
// solution(name) = false;
// For name = "2w2", the output should be
// solution(name) = false.

// Parameters
const param = "svar_1__Int"

// My Solution
function solution(name) {
    //const rgx = /^[A-Za-z_]([A-Za-z0-9_]*)$/g
    // \w = [A-Za-z0-9_]
    const rgx = /^[A-Za-z_](\w*)$/g
    return rgx.test(name)
}

// Best solution:
function bestSolution(name) {
    return /^[a-z_]\w*$/i.test(name)
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))