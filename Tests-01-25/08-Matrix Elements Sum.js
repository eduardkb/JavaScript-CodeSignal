// Test description:
// 	After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms 
// 	has a different cost, and some of them are free, but there's a rumour that all the free rooms are 
// 	haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, 
// 	or any of the rooms below any of the free rooms.
// 	Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, 
// 	your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up 
// 	all the values that don't appear below a 0).

// Example
// 	For
// 	matrix = [[0, 1, 1, 2],
// 			  [0, 5, 0, 0],
// 			  [2, 0, 3, 3]]
// 	the output should be
// 	solution(matrix) = 9.
// 	There are several haunted rooms, so we'll disregard them as well as any rooms beneath them. Thus, 
// 	the answer is 1 + 5 + 1 + 2 = 9.

// 	For
// 	matrix = [[1, 1, 1, 0], 
// 			  [0, 5, 0, 1], 
// 			  [2, 1, 3, 10]]
// 	the output should be
// 	solution(matrix) = 9.
// 	Note that the free room in the final column makes the full column unsuitable for bots (not just 
// 	the room directly beneath it). Thus, the answer is 1 + 1 + 1 + 5 + 1 = 9.

// Parameters
const param = [[0, 1, 1, 2],
[0, 5, 0, 0],
[2, 0, 3, 3]]

// My Solution
function solution(matrix) {
	let iSum = 0;
	let bHaunt = false;
	let colLen = matrix[0].length;
	let linLen = matrix.length;

	for (let iCol = 0; iCol < colLen; iCol++) {
		bHaunt = false;
		for (let iLin = 0; iLin < linLen; iLin++) {
			if (matrix[iLin][iCol] == 0) {
				bHaunt = true;
			}
			else if (!bHaunt) {
				iSum += matrix[iLin][iCol];
			}
		}
	}
	return iSum;
}

// Best solution:
function bestSolution(matrix) {
	for (var r = 0, j = 0; j < matrix[0].length; j++) {
		for (var i = 0; i < matrix.length; i++) {
			if (matrix[i][j] === 0) break
			else r += matrix[i][j]
		}
	}
	return r
}
// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))
