// Test description:
// 	Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing 
// 	sequence by removing no more than one element from the array.
// 	Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. 
// 	Sequence containing only one element is also considered to be strictly increasing.
// Example
// 	For sequence = [1, 3, 2, 1], the output should be
// 	solution(sequence) = false.
// 	There is no one element in this array that can be removed in order to get a strictly increasing sequence.
// 	For sequence = [1, 3, 2], the output should be
// 	solution(sequence) = true.
// 	You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can 
// 	remove 2 to get the strictly increasing sequence [1, 3].




// Parameters
const param = [1, 3, 2]

// My Solution
function solution(sequence) {
	let drop = false;
	let last = Math.min(...sequence) - 1;
	let prev = last;

	for (i = 0; i < sequence.length; i++) {
		elm = sequence[i];
		if (elm <= last) {
			if (drop) {
				return false;
			}
			else {
				drop = true;
			}
			if (elm <= prev) {
				prev = last;
			}
			else if (elm >= prev) {
				prev = elm;
				last = elm;
			}
		}
		else {
			prev = last;
			last = elm;
		}
	}
	return true;
}

// Best solution:
function bestSolution(sequence) {
	var count = 0;
	for (var i = 0; i < sequence.length; i++) {
		if (sequence[i] <= sequence[i - 1]) {
			console.log("")
			count++;
			if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) return false;
		}
	}
	return count <= 1;
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))