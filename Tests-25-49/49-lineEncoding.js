// Test description:
// Given a string, return its encoding defined as follows:
// First, the string is divided into the least possible number of disjoint substrings 
// consisting of identical characters
// for example, "aabbbc" is divided into ["aa", "bbb", "c"]
// Next, each substring with length greater than one is replaced with a concatenation 
// of its length and the repeating character
// for example, substring "bbb" is replaced by "3b"
// Finally, all the new strings are concatenated together in the same order and a new 
// string is returned.
// Example
// For s = "aabbbc", the output should be
// solution(s) = "2a3bc".

// s: "wwwwwwwawwwwwww" Expected return value "7wa7w"
// s: "qwertyuioplkjhg" Expected return value "qwertyuioplkjhg"
// s: "bbjaadlkjdl" Expected return value "2bj2adlkjdl"
 
// Parameters
const param = "aabbbc"

// My Solution
function solution(s) {
    let sLast = "";
    let sTmp = "";
    let iCnt = 0;
    let aRes = [];
    s.split('').forEach(e => {
        if(e != sLast){
            if(iCnt>1){
                sTmp = aRes.pop();
                aRes.push(iCnt.toString());
                aRes.push(sTmp);
            }
            iCnt=1;
            aRes.push(e);
        }
        else{
            iCnt+=1;
        }
        sLast=e;
    });
    if(iCnt>1){
        sTmp = aRes.pop();
        aRes.push(iCnt.toString());
        aRes.push(sTmp);
    }
    return aRes.join('');
}

// Best solution:
function bestSolution(s) {
  let count = 1;
  let ans = '';
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      if (count > 1) ans += count + s[i];
      else ans += s[i];
      count = 1;
    }
  }
  return ans;
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))