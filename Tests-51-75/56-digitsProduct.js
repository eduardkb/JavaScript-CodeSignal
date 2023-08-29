// Test description:
// Given an integer product, find the smallest 
// positive (i.e. greater than 0) integer the 
// product of whose digits is equal to product. 
// If there is no such integer, return -1 instead.
// Example
// For product = 12, the output should be
// solution(product) = 26;
// For product = 19, the output should be
// solution(product) = -1.

// 360 = 589
// 450 = 2559

// Parameters
const param = 360

// My Solution
function solution(product) {
    if (product == 0) {
        return 10;
    }

    let iNum = '1111'.split('');
    let i = 1;
    let iRes = -1;
    while (iNum.join('') != '9999' && iRes == -1) {
        // console.log(`DEB_${i}: ${iNum} ||| ${iNum.reduce((p, c) => p * c, 1)}`)
        if (iNum.reduce((p, c) => p * c, 1) == product) {
            while (iNum[0] == '1') {
                iNum.shift();
            }
            iNum.length > 0 ? iRes = parseInt(iNum.join('')) : iRes = 1
        }
        i++;
        let j = iNum.length - 1
        let bOver = false;
        while (iNum[j] == '9') {
            iNum[j] = '1';
            j--;
            bOver = true;
        }
        if (bOver) {
            iNum[j] = (parseInt(iNum[j]) + 1).toString();
        }
        else {
            iNum[iNum.length - 1] = (parseInt(iNum[iNum.length - 1]) + 1).toString();
        }

    }
    return iRes;
}

// Best solution:
function bestSolution(product) {
    if (product == 0) return 10;
    if (product == 1) return 1;
    var divisor = 10,
        power = 1,
        result = 0;
    while (product > 1) {
        if (--divisor == 1) return -1;
        while (product % divisor == 0) {
            product /= divisor;
            result += divisor * power;
            power *= 10;
        }
    }
    return result;
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))