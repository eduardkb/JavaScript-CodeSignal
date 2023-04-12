// Test description:
// You are given an array of integers representing coordinates of obstacles 
// situated on a straight line.

// Assume that you are jumping from the point with coordinate 0 to the right. 
// You are allowed only to make jumps of the same length represented by 
// some integer.
// Find the minimal length of the jump enough to avoid all the obstacles.

// Example
// For inputArray = [5, 3, 6, 7, 9], the output should be
// solution(inputArray) = 4.
// Check out the image below for better understanding:
// [19, 32, 11, 23] = 3
// [1, 4, 10, 6, 2] = 7
// [2, 3] = 4

// Parameters
const param1 = [5, 3, 6, 7, 9] //4
const param2 = [2, 3] // 4
const param4 = [19, 32, 11, 23] // 3
const param5 = [1, 4, 10, 6, 2] // 7
//const param3 = [1000,  999] // 6

// My Solution
function solution(inputArray) {
    // SOLUTION 2
    let iCnt = 0;
    bSol = false
    while (1) {
        iCnt++;
        bInvalid = false;
        for (i = 0; i < inputArray.length; i++) {
            if (inputArray[i] % iCnt == 0) {
                bInvalid = true
                break;
            }
            if (bInvalid) {
                continue
            }

        }
        if (!bInvalid) {
            return iCnt
        }
        continue;
    }

    // SOLUTION 1 - TAKES TOO LONG
    // let iCnt = 0;
    // bSol = false
    // while (!bSol) {
    //     iCnt++;
    //     arr = inputArray.map(e => e % iCnt)
    //     arr.join('').indexOf('0') == -1 ? bSol = true : null
    // }
    // return iCnt
}

// Best solution:
function bestSolution(inputArray) {
    for (var n = 1; ; n++) if (inputArray.every(x => x % n)) return n
}

// console log
console.log("My Solution: ", solution(param1))
console.log("Best Solution: ", bestSolution(param1))


function buildGraphic(inputArray) {
    aOrig = inputArray.slice()
    aOrig = aOrig.sort((a, b) => a - b)
    arr = []
    iMin = Math.min(...aOrig)
    iLen = aOrig.length
    for (i = iLen - 1; i >= 0; i--) {
        if (i == iLen - 1) {
            arr.unshift('....>')
            arr.unshift(aOrig[i])
        }
        else if (i == 0) {
            if (aOrig[i + 1] - aOrig[i] - 1 >= 1) {
                arr.unshift(''.padStart(aOrig[i + 1] - aOrig[i] - 1, '.'))
            }
            arr.unshift(aOrig[i])
            arr.unshift('<'.padEnd(iMin, '.'))
        }
        else {
            if (aOrig[i + 1] - aOrig[i] - 1 >= 1) {
                arr.unshift(''.padStart(aOrig[i + 1] - aOrig[i] - 1, '.'))
            }
            arr.unshift(aOrig[i])

        }

    }

    return (arr.join(' '))
}