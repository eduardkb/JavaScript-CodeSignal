// Test description:
// Several people are standing in a row and need to be divided into two teams. 
// The first person goes into team 1, the second goes into team 2, the third goes 
// into team 1 again, the fourth into team 2, and so on.

// You are given an array of positive integers - the weights of the people. 
// Return an array of two integers, where the first element is the total weight 
// of team 1, and the second element is the total weight of team 2 after the 
// division is complete.

// Example

// For a = [50, 60, 60, 45, 70], the output should be
// solution(a) = [180, 105].

// Parameters
const param = [50, 60, 60, 45, 70];

// My Solution
function solution(a) {
    let i1 = i2 = 0;
    a.forEach((el, i) => {
        i % 2 == 0 ? i1 += el : i2 += el
    })
    return [i1, i2]
}

// Best solution:
function bestSolution(a) {
    return a.reduce((p, v, i) => (p[i & 1] += v, p), [0, 0])
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))