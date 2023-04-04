// Test description:
// Some people are standing in a row in a park. There are trees between them which cannot be moved. 
// Your task is to rearrange the people by their heights in a non-descending order without moving the 
// trees. People can be very tall!

// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190]

// Parameters
const param = [-1, 150, 190, 170, -1, -1, 160, 180]

// My Solution
function solution(n) {
    let aTemp = n.filter((el) => el != -1)
    let iMin = 0;
    n = n.map((el) => {
        if (el != -1) {
            iMin = Math.min(...aTemp);
            var index = aTemp.indexOf(iMin);
            if (index !== -1) {
                aTemp.splice(index, 1);
            }
            return iMin;
        }
        else {
            return el;
        }
    })
    return n;
}

// Best solution:
function bestSolution(n) {
    var s = n.filter(h => h > 0).sort((a, b) => a - b)
    return n.map(p => {
        if (p !== -1) {
            return s.shift();
        }

        return -1;
    })
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))