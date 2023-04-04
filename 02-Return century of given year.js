// Test description:
// 	Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
// 	Example
// 	For year = 1905, the output should be
// 	solution(year) = 20;
// 	For year = 1700, the output should be
// 	solution(year) = 17.

// Init and Parameters
const param = 1905

// My Solution
function solution(year) {
	return (year % 100 == 0) ? Math.floor(year / 100) : Math.floor(year / 100) + 1;
};

// Best solution:
const bestSolution = y => Math.ceil(y / 100)

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))
