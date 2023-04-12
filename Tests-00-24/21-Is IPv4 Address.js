// Test description:
// An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network 
// that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions 
// of addresses. One of them is the IPv4 address.
// Given a string, find out if it satisfies the IPv4 address naming rules.

// Example
// For inputString = "172.16.254.1", the output should be
// solution(inputString) = true;
// For inputString = "172.316.254.1", the output should be
// solution(inputString) = false.
// 316 is not in range [0, 255].
// For inputString = ".254.255.0", the output should be
// solution(inputString) = false.
// There is no first number.

// Parameters
const param = "22.254.3.2"

// My Solution 
function solution(inputString) {
    aArr = inputString.split('.')
    if (aArr.length == 4) {
        for (let i = 0; i < aArr.length; i++) {
            const iTmp = Number(aArr[i])
            if (iTmp < 0 || iTmp > 255 || isNaN(iTmp)) {
                return false;
            }
            if ((aArr[i][0] == '0' && aArr[i].length >= 2) || (aArr[i] == '')) {
                return false
            }
        }
        return true;
    }
    return false;
}

// Best solution:
function bestSolution(inputString) {
    return /^((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(?!$)|$)){4}$/.test(inputString);
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))