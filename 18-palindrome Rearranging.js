// Test description:
// Given a string, find out if its characters can be rearranged to form a palindrome.

// Example
// For inputString = "aabb", the output should be
// solution(inputString) = true.
// We can rearrange "aabb" to make "abba", which is a palindrome.
// inputString: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc" RES: False
// inputString: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa"  RES: False
// inputString: "abbcabb" RES: True

// Parameters
const param = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa"

// My Solution
function solution(n) {
    // get unique elements
    aUniq = [...new Set(n)];
    aCountElem = []
    let countOdd = 0;

    // count numbner of elements in array   
    aUniq.forEach(e => aCountElem.push((n.match(new RegExp(e, 'g')) || []).length));
    // count number chars that have odd occurrences
    aCountElem.forEach(e => e % 2 == 1 ? countOdd++ : null)

    if (n.length % 2 == 1) {
        // odd number of elements
        return (countOdd == 1) ? true : false;
    }
    else {
        // even number of elements
        return (countOdd == 0) ? true : false;
    }
}

// Best solution:
function bestSolution(n) {
    return n.split('').sort().join('').replace(/(\w)\1/g, '').length < 2;
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))