// Test description:
// Given an array of equal-length strings, you'd like to know if it's possible to 
// rearrange the order of the elements in such a way that each consecutive pair of 
// strings differ by exactly one character. Return true if it's possible, and 
// false if not.
// Note: You're only rearranging the order of the strings, not the order of the 
// letters within the strings!

// Example
// For inputArray = ["aba", "bbb", "bab"], the output should be
// solution(inputArray) = false.
// There are 6 possible arrangements for these strings:
// ["aba", "bbb", "bab"]
// ["aba", "bab", "bbb"]
// ["bbb", "aba", "bab"]
// ["bbb", "bab", "aba"]
// ["bab", "bbb", "aba"]
// ["bab", "aba", "bbb"]
// None of these satisfy the condition of consecutive strings differing by 1 character, 
// so the answer is false.
// For inputArray = ["ab", "bb", "aa"], the output should be
// solution(inputArray) = true.
// It's possible to arrange these strings in a way that each consecutive pair of strings 
// differ by 1 character (eg: "aa", "ab", "bb" or "bb", "ab", "aa"), so return true.

// inputArray: ["abc", "bef", "bcc", "bec", "bbc", "bdc"] = true

// Parameters
let param = ["ab", "bb", "aa"]

// My Solution
function solution(inputArray) {
    let arranjos = []
    arranjos.push([inputArray[0]])

    // find all combinatins possible    
    for (let i = 1; i < inputArray.length; i++) {
        aCurr = arranjos.slice()
        arranjos = []
        for (let k = 0; k < aCurr.length; k++) {
            for (let j = 0; j < aCurr[k].length + 1; j++) {
                aTmp = aCurr[k].slice()
                aTmp.splice(j, 0, inputArray[i])
                arranjos.push(aTmp)
                if (aTmp.length === inputArray.length) {
                    // exactly when each combination is found, for each combination found test condition 
                    // test condition: verify if each next string in array is maximum exactly 1 char different
                    let x = 1;
                    bTestValid = true;
                    while (x < aTmp.length && bTestValid) {
                        let iDiffCnt = 0
                        for (let w = 0; w < aTmp[x].length; w++) {
                            aTmp[x - 1][w] != aTmp[x][w] ? iDiffCnt++ : null
                        }
                        iDiffCnt != 1 ? bTestValid = false : null
                        x++
                    }
                    if (bTestValid) {
                        // print combination fount that maches test condition
                        console.log("--> Success: ", aTmp)
                        return true
                    }
                }
            }
        }
    }
    return false;
}

// Best solution:
function bestSolution(inputArray) {
    function findNext(current, a) {
        if (a.length === 0) return a;
        for (let i = 0; i < a.length; i++) {
            if (differsByOneChar(current, a[i])) {
                let remaining = findNext(a[i], a.slice(0, i).concat(a.slice(i + 1)));
                if (remaining.length === 0) return remaining;
            }
        }
        return a;
    }

    function differsByOneChar(s1, s2) {
        let mismatches = 0;
        for (let i = 0; i < s1.length; i++) {
            if (s1[i] !== s2[i]) mismatches++;
            if (mismatches > 1) break;
        }
        return mismatches === 1;
    }

    for (let i = 0; i < inputArray.length; i++) {
        let remaining = findNext(inputArray[i], inputArray);
        if (remaining.length === 0) return true;
    }
    return false;
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))