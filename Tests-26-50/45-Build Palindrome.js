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
const param = "aaaaba"

// My Solution
function solution(st) {
    sOrig = st
    let notPal = true;
    let aRestore = [];
    let aSt = st.split('');
    
    while(notPal && st.length > 1){
        if(st == st.split('').reverse().join('')){
            notPal = false;
        }
        else{
            aRestore.unshift(aSt.shift());
            st = aSt.join('')
        }
    }
    return sOrig + aRestore.join('')
}

// Best solution:
function bestSolution(st) {
    function isPalindrome(string) {
        return string == Array.from(string).reverse().join('')
    }

    if (isPalindrome(st))  return st;
    for (var i = 0; i < st.length; i++) {
        if (isPalindrome(st.slice(i, st.length))) {
            return st + Array.from(st.slice(0, i)).reverse().join('');
        }
    }
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))