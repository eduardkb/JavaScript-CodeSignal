// Test description:
// A string is said to be beautiful if each letter in the string appears 
// at most as many times as the previous letter in the alphabet within the 
// string; ie: b occurs no more times than a; c occurs no more times than 
// b; etc. Note that letter a has no previous letter.
// Given a string, check whether it is beautiful.

// Example
// For inputString = "bbbaacdafe", the output should be 
// solution(inputString) = true.
// This string contains 3 as, 3 bs, 1 c, 1 d, 1 e, and 1 f (and 0 of every 
//     other letter), so since there aren't any letters that appear more 
//     frequently than the previous letter, this string qualifies as beautiful.
// For inputString = "aabbb", the output should be solution(inputString) = false.
// Since there are more bs than as, this string is not beautiful.
// For inputString = "bbc", the output should be solution(inputString) = false.
// Although there are more bs than cs, this string is not beautiful because there 
// are no as, so therefore there are more bs than as.

// Parameters
const param = "aabbabcdfe"

// My Solution
function solution(inputString) {
    let iLastCnt = 1000
    let iChar = 97
    while (iChar <= 122 && inputString.length > 0) {
        let iCnt = 0
        arrItems = inputString.match(new RegExp(String.fromCharCode(iChar), 'g'))
        inputString = inputString.replaceAll(String.fromCharCode(iChar), '')
        arrItems == null ? iCnt = 0 : iCnt = arrItems.length

        // console.log(`-${String.fromCharCode(iChar)}`, "-", iCnt, "-", inputString.padEnd(10, "_"), "|", iCnt, iLastCnt)
        if (iLastCnt < iCnt) {
            return false
        }
        iLastCnt = iCnt
        iChar++
    }
    return true
}

// Best solution:
function bestSolution(inputString) {
    s = "abcdefghijklmnopqrstuvwxyz"
    for (i = 1; i < s.length; i++) {
        if (inputString.split(s[i]).length - 1 > inputString.split(s[i - 1]).length - 1) {
            return false
        }
    }
    return true
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))