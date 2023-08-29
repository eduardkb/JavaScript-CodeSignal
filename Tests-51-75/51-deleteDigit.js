// Test description:
// Given some integer, find the maximal number you can obtain 
// by deleting exactly one digit of the given number.

// Example
// For n = 152, the output should be
// solution(n) = 52;
// For n = 1001, the output should be
// solution(n) = 101.

// Parameters
const param = 1001

// My Solution
function solution(n) {
    n = n.toString().split('');
    iSol = 0;
    for(let i=0; i<n.length;i++){
        aTmp = [...n];
        aTmp.splice(i,1);
        iTmp = parseInt(aTmp.join(''));
        iTmp > iSol ? iSol = iTmp : null;
    };
    return iSol;
}

// Best solution:
function bestSolution(n) {
    s = n.toString()
    return Math.max(...[...Array(s.length).keys()].map(i=>Number(s.slice(0,i)+s.slice(i+1))))
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))