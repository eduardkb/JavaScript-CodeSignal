// Test description:
// Caring for a plant can be hard work, but since you tend to it regularly, you have 
// a plant that grows consistently. Each day, its height increases by a fixed amount 
// represented by the integer upSpeed. But due to lack of sunlight, the plant decreases 
// in height every night, by an amount represented by downSpeed.
// Since you grew the plant from a seed, it started at height 0 initially. Given an 
// integer desiredHeight, your task is to find how many days it'll take for the plant 
// to reach this height.

// Example
// For upSpeed = 100, downSpeed = 10, and desiredHeight = 910, the output should be
// solution(upSpeed, downSpeed, desiredHeight) = 10.
// #	Day	Night
// 1	100	90
// 2	190	180
// 3	280	270
// 4	370	360
// 5	460	450
// 6	550	540
// 7	640	630
// 8	730	720
// 9	820	810
// 10	910	900
// The plant first reaches a height of 910 on day 10.

// Parameters
const p1 = 100
const p2 = 10
const p3 = 910

// My Solution
function solution(upSpeed, downSpeed, desiredHeight) {
    let day = 1;
    let growth = upSpeed;
    while (growth < desiredHeight) {
        growth += upSpeed - downSpeed
        day++
    }
    return day;
}

// Best solution:
function bestSolution(upSpeed, downSpeed, desiredHeight) {
    return upSpeed > desiredHeight ? 1 : Math.ceil((desiredHeight - upSpeed) / (upSpeed - downSpeed)) + 1;
}

// console log
console.log("My Solution: ", solution(p1, p2, p3))
console.log("Best Solution: ", bestSolution(p1, p2, p3))