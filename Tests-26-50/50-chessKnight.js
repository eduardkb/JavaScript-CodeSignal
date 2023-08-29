// Test description:
// Given a position of a knight on the standard chessboard, find the number of 
// different moves the knight can perform.
// The knight can move to a square that is two squares horizontally and one square 
// vertically, or two squares vertically and one square horizontally away from it. 
// The complete move therefore looks like the letter L. Check out the image below 
// to see all valid moves for a knight piece that is placed on one of the central 
// squares.
// Example
// For cell = "a1", the output should be
// solution(cell) = 2.
// For cell = "c2", the output should be
// solution(cell) = 6.

// Parameters
const param = 'b1'

// My Solution
function solution(cell) {
    let posX='abcdefgh'.indexOf(cell[0])+1;
    let posY=parseInt(cell[1]) ;
    let iCnt = 0;

    let aOp = [[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]]
    aOp.forEach(e => {
        if(posX + e[0] > 0 && posX + e[0] < 9 &&
            posY + e[1] > 0 && posY + e[1] < 9){
                iCnt++;
            }
    });
    return iCnt

}

// Best solution:
function bestSolution(cell) {
    function solution(cell) {
        const chessBoard = [
            [2,3,4,4,4,4,3,2],
            [3,4,6,6,6,6,4,3],
            [4,6,8,8,8,8,6,4],
            [4,6,8,8,8,8,6,4],
            [4,6,8,8,8,8,6,4],
            [4,6,8,8,8,8,6,4],
            [3,4,6,6,6,6,4,3],
            [2,3,4,4,4,4,3,2],
        ]
        
        const x = cell[0].charCodeAt() - 97;
        console.log(x)
        return chessBoard[cell[1] - 1][x]
    }
    
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))