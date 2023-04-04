// Test description:
// 	Given the string, check if it is a palindrome.
// Example
// 	For inputString = "aabaa", the output should be
// 	solution(inputString) = true;
// 	For inputString = "abac", the output should be
// 	solution(inputString) = false;
// 	For inputString = "a", the output should be
// 	solution(inputString) = true.

// Init and Parameters
const param = "aabaa"

// My Solution
function solution(inputString) {
	let sRes = "";
	for (let i = inputString.length - 1; i >= 0; i--) {
		sRes += inputString[i];
	}
	return (sRes == inputString)
}

// Best solution:
function bestSolution(inputString) {
	return inputString == inputString.split('').reverse().join('');
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))
