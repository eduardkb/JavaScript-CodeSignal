// Test description:
// Given a sorted array of integers a, your task is to determine which element of 
// a is closest to all other values of a. In other words, find the element x in a, 
// which minimizes the following sum:
// abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
// (where abs denotes the absolute value)
// If there are several possible answers, output the smallest one.

// Example
// For a = [2, 4, 7], the output should be solution(a) = 4.
// for x = 2, the value will be abs(2 - 2) + abs(4 - 2) + abs(7 - 2) = 7.
// for x = 4, the value will be abs(2 - 4) + abs(4 - 4) + abs(7 - 4) = 5.
// for x = 7, the value will be abs(2 - 7) + abs(4 - 7) + abs(7 - 7) = 8.
// The lowest possible value is when x = 4, so the answer is 4.
// For a = [2, 3], the output should be solution(a) = 2.
// for x = 2, the value will be abs(2 - 2) + abs(3 - 2) = 1.
// for x = 3, the value will be abs(2 - 3) + abs(3 - 3) = 1.
// Because there is a tie, the smallest x between x = 2 and x = 3 is the answer.

// Parameters
let param = [2, 4, 7, 10, 33, 34, 35, 36, 37, 38, 39]

// My Solution
function solution(a) {
    aRes = []
    aRes = a.map((eMap) => {
        console.log("------------------------------------")
        return a.reduce((acc, eRed, i) => {
            console.log(`${i} - ${acc} | ${eMap} | ${eRed}`)
            return acc + Math.abs(eRed - eMap)
        }, 0)
        // let iCnt = 0
        // for (let i = 0; i < a.length; i++) {
        //     iCnt += Math.abs(a[i] - e)
        // }
        // return iCnt
    })
    console.log(aRes)
    return a[aRes.indexOf(Math.min(...aRes))]
}

// Best solution:
function bestSolution(a) {
    let distances = a.map(e => a.reduce((acc, cur) => acc + Math.abs(cur - e), 0));
    return a[distances.indexOf(Math.min(...distances))];
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))