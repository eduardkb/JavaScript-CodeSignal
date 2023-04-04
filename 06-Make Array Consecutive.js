// Test description:
// 	Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue 
// 	having an non-negative integer size. Since he likes to make things perfect, he wants to arrange 
// 	them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. 
// 	He may need some additional statues to be able to accomplish that. Help him figure out the minimum 
// 	number of additional statues needed.
// Example
// 	For statues = [6, 2, 3, 8], the output should be
// 	solution(statues) = 3.
// 	Ratiorg needs statues of sizes 4, 5 and 7.

// Parameters
const param = [6, 2, 3, 8]

// My Solution
function solution(statues) {
	return ((Math.max(...statues)) - (Math.min(...statues)) - (statues.length - 2) - 1)
}

// Best solution:
function bestSolution(statues) {
	return Math.max(...statues) - Math.min(...statues) + 1 - statues.length
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))