// Test description:
// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// Example

// picture = ["abc",
//            "ded"]
// the output should be

// solution(picture) = ["*****",
//                      "*abc*",
//                      "*ded*",
//                      "*****"]

// Parameters
const param = ["abcds",
    "dedrr"]

// My Solution
function solution(picture) {
    picture = picture.map((e) => {
        return `*${e}*`
    })
    let sTmp = ''.padStart(picture[0].length, '*')
    picture.unshift(sTmp)
    picture.push(sTmp)
    return picture;
}

// Best solution:
function bestSolution(n) {
    var width = picture[0].length + 2;
    return [
        '*'.repeat(width),
        ...picture.map(line => `*${line}*`),
        '*'.repeat(width)
    ];
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))