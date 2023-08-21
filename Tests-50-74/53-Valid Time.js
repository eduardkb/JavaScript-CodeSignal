// Test description:
// Check if the given string is a correct time 
// representation of the 24-hour clock.
// Example
// For time = "13:58", the output should be
// solution(time) = true;
// For time = "25:51", the output should be
// solution(time) = false;
// For time = "02:76", the output should be
// solution(time) = false.

// Parameters
const param = "25:51"

// My Solution
function solution(time) {
    aTime = time.split(":");
    if (parseInt(aTime[0]) < 0 || parseInt(aTime[0]) > 23) {
        return false
    }
    if (parseInt(aTime[1]) < 0 || parseInt(aTime[1]) > 59) {
        return false
    }
    return true;
}

// Best solution:
function bestSolution(time) {
    return time.split(":")[0] < 24 && time.split(":")[1] < 60
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))