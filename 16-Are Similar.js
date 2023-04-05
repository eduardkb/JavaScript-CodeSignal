// Test description:
// Two arrays are called similar if one can be obtained from another by swapping 
// at most one pair of elements in one of the arrays.
// Given two arrays a and b, check whether they are similar.

// Example
// For a = [1, 2, 3] and b = [1, 2, 3], the output should be
// solution(a, b) = true.
// The arrays are equal, no need to swap any elements.
// For a = [1, 2, 3] and b = [2, 1, 3], the output should be
// solution(a, b) = true.
// We can obtain b from a by swapping 2 and 1 in b.
// For a = [1, 2, 2] and b = [2, 1, 1], the output should be
// solution(a, b) = false.
// Any swap of any two elements either in a or in b won't make a and b equal.
// for: a: [832, 998, 148, 570, 533, 561, 894, 147, 455, 279]
//      b: [832, 570, 148, 998, 533, 561, 455, 147, 894, 279]
//      RES: false

// Parameters
let param1 = [832, 998, 148, 570, 533, 561, 894, 147, 455, 279]
let param2 = [832, 570, 148, 998, 533, 561, 455, 147, 894, 279]

// My Solution
function solution(a, b) {
    let count = 0;
    ePrev = '';
    a.forEach((e, i) => {
        if (e != b[i]) {
            if (ePrev == '') {
                ePrev = e;
                count++;
            }
            else {
                if (b[i] == ePrev) {
                    ePrev = '';
                    count++
                }
                else {
                    count++
                }

            }
        }
    });
    if (a.slice().sort().join(',') != b.slice().sort().join(',')) {
        return false
    }
    return (count > 2) ? false : true
}

// Best solution:
function bestSolution(a, b) {
    const ad = a.filter((v, i) => v != b[i])
    const bd = b.filter((v, i) => v != a[i])
    return ad.length == 0 || (ad.length == 2 && ad.join('') == bd.reverse().join(''))
}

// console log
console.log("My Solution: ", solution(param1, param2))
console.log("Best Solution: ", bestSolution(param1, param2))