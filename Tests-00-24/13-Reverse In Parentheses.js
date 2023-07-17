// Test description:
// Write a function that reverses characters in (possibly nested) parentheses in 
// the input string.

// Input strings will always be well-formed with matching ()s.

// Example

// For inputString = "(bar)", the output should be
// solution(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// solution(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be
// solution(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be
// solution(inputString) = "foobazrabblim".
// Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".

// Parameters
const param = "foo(bar(baz))blim"

// My Solution
function solution(inputString) {
    let aInv = [];
    let aRes = '';
    let bInv = false;
    let bOrderInv = false;
    inputString = inputString.split('');
    inputString.forEach((el) => {
        if (!bInv && el == "(") {
            bInv = true
        }
        else if (el == ")") {
            aRes += aInv.join('');
            bInv = false;
            bOrderInv = false;
            aInv = [];
        }
        else if (bInv && el == "(") {
            bOrderInv = true;
        }
        else {
            if (bOrderInv) {
                aRes += el;
            }
            else if (bInv) {
                aInv.unshift(el);
            }
            else {
                aRes += el;
            }
        }
    })
    return aRes;
}
// Best solution:
function bestSolution(inputString) {
    let s = inputString;
    while (true) {
        let c = inputString.indexOf(")");

        if (c === -1) {
            break;
        }

        let o = inputString.substring(0, c).lastIndexOf("(");

        let start = inputString.substring(0, o);
        let middle = inputString.substring(o + 1, c).split("").reverse().join("");
        let end = inputString.substring(c + 1, inputString.length);

        inputString = start + middle + end;
    }

    return inputString;
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))