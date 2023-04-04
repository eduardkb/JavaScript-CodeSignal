// Test description:
// 	Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
// Example
// 	For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// 	solution(inputArray) = 21.
// 	7 and 3 produce the largest product.

// Init and Parameters
const param = [3, 6, -2, -5, 7, 3]

// My Solution
function solution(inputArray) {
	let maxProd = inputArray[0] * inputArray[1];
	for (let i = 1; i < inputArray.length; i++)
		if (inputArray[i - 1] * inputArray[i] > maxProd) {
			maxProd = inputArray[i - 1] * inputArray[i];
		}

	return maxProd
}

// Best solution:
function bestSolution(inputArray) {
	return Math.max(...inputArray.slice(1).map((x, i) => [x * inputArray[i]]))
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))