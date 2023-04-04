// Test description:
// 	Given two strings, find the number of common characters between them.
// Example
// 	For s1 = "aabcc" and s2 = "adcaa", the output should be
// 	solution(s1, s2) = 3.
// 	Strings have 3 common characters - 2 "a"s and 1 "c".

// Parameters
const param1 = "abca"
const param2 = "xyzbac"

// My Solution
function solution(s1, s2) {
	let count = 0;
	let iPos = 0;

	for (let i = 0; i < s1.length; i++) {
		iPos = (s2.indexOf(s1[i]))
		if (iPos != -1) {
			count++;
			s2 = s2.slice(0, iPos) + s2.slice(iPos + 1)
		}
	}
	return count;
}

// Best solution:
function bestSolution(s1, s2) {
	for (var i = 0; i < s1.length; i++) {
		s2 = s2.replace(s1[i], "!");
	}
	return s2.replace(/[^!]/g, "").length;
}

// console log
console.log("My Solution: ", solution(param1, param2))
console.log("Best Solution: ", bestSolution(param1, param2))