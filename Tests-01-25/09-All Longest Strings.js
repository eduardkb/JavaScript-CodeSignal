// Test description:
// 	Given an array of strings, return another array containing all of its longest strings.
// Example
// 	For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// 	solution(inputArray) = ["aba", "vcd", "aba"].

// Parameters
const param = ["aba", "aa", "ad", "vcd", "aba"]

// My Solution
function solution(inputArray) {
	let arr = [];
	let iMax = 0;
	for (i = 0; i < inputArray.length; i++) {
		// console.log("i--> ", i);
		if (inputArray[i].length > iMax) {
			// console.log(`larger found ${inputArray[i].length}|${iMax}`);
			iMax = inputArray[i].length;
			arr = [];
			arr.push(inputArray[i]);
		}
		else if (inputArray[i].length == iMax) {
			// console.log(`insert new ${inputArray[i].length}|${iMax}`);
			arr.push(inputArray[i]);
		}
	}
	return arr;
}

// Best solution:
function bestSolution(inputArray) {
	let maxSize = Math.max(...inputArray.map(x => x.length));
	return inputArray.filter(x => x.length === maxSize);
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))