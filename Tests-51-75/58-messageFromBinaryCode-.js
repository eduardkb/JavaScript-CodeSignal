// Test description:
// You are taking part in an Escape Room challenge 
// designed specifically for programmers. In your 
// efforts to find a clue, you've found a binary code 
// written on the wall behind a vase, and realized that 
// it must be an encrypted message. After some thought, 
// your first guess is that each consecutive 8 bits of 
// the code stand for the character with the 
// corresponding extended ASCII code.
// Assuming that your hunch is correct, decode the 
// message.
// Example
// For code = "010010000110010101101100011011000110111100100001", 
// the output should be
// solution(code) = "Hello!".
// The first 8 characters of the code are 01001000, which is 72 
// in the binary numeral system. 72 stands for H in the 
// ASCII-table, so the first letter is H.
// Other letters can be obtained in the same manner.

// Parameters
const param = "010001000110100101100101001000000111011101101001011101000110100000100000011011010110010101101101011011110111001001101001011001010111001100101100001000000110111001101111011101000010000001100100011100100110010101100001011011010111001100101110"

// My Solution
function solution(code) {
    code = code.match(/\d{8}/g)
    return code.map(e => {
        let iNum = 0,
            iPow = 1;
        for (i = 7; i >= 0; i--) {
            (e[i] == '1') && (iNum += iPow);
            iPow *= 2;
        }
        return String.fromCharCode(iNum)
        // using parseInt function (convert byte to decimal)
        // return String.fromCharCode(parseInt(e, 2))
    }).join('');
}

// Best solution:
function bestSolution(code) {
    return code.match(/.{8}/g).reduce((a, b) => a + String.fromCharCode(parseInt(b, 2)), "")
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))