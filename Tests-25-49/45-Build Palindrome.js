// Test description:
// Given a string, find the shortest possible string which can 
// be achieved by adding characters to the end of initial string to 
// make it a palindrome.

// Example
// For st = "abcdc", the output should be
// solution(st) = "abcdcba".
// st: "abaa"      Res: "abaaba"
// st: "aaaaba"    Res: "aaaabaaaa"
// st: "abc"       Res: "abcba"

// Parameters
const param = "abcdedcb"

// My Solution
function solution(st) {
    if (st == st.split('').reverse().join('')) {
        return st;
    }
    else {
        bPal = true
        iStart = 0
        while (bPal) {
            iStart += 1
            sTmp = st.substr(iStart, st.length - iStart)
            console.log(`Stmp = ${sTmp}`)
            if (iStart == st.length - 1) {
                bPal = false
            }
        }
        return 1;
    }

}

// Best solution:
function bestSolution(st) {
    return 1;
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))