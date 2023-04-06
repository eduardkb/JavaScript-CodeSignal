// Test description:
// Call two arms equally strong if the heaviest weights they each are able to lift are 
// equal.
// Call two people equally strong if their strongest arms are equally strong (the 
//     strongest arm can be both the right and the left), and so are their weakest arms.

// Given your and your friend's arms' lifting capabilities find out if you two are 
// equally strong.

// Example
// For yourLeft = 10, yourRight = 15, friendsLeft = 15, and friendsRight = 10, 
// the output should be solution(yourLeft, yourRight, friendsLeft, friendsRight) = true;
// For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 10, 
// the output should be solution(yourLeft, yourRight, friendsLeft, friendsRight) = true;
// For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 9, 
// the output should be solution(yourLeft, yourRight, friendsLeft, friendsRight) = false.

// Parameters
const p1 = 10
const p2 = 15
const p3 = 15
const p4 = 10

// My Solution
function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
    if ((yourLeft == friendsLeft && yourRight == friendsRight) ||
        (yourLeft == friendsRight && yourRight == friendsLeft)) {
        return true;
    }
    return false;
}

// Best solution:
function bestSolution(yourLeft, yourRight, friendsLeft, friendsRight) {
    return yourLeft + yourRight === friendsLeft + friendsRight && (yourLeft === friendsLeft || yourLeft === friendsRight);
}

// console log
console.log("My Solution: ", solution(p1, p2, p3, p4))
console.log("Best Solution: ", bestSolution(p1, p2, p3, p4))