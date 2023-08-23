// Test description:
// You are given an array of strings names representing 
// filenames. The array is sorted in order of file creation, 
// such that names[i] represents the name of a file created 
// before names[i+1] and after names[i-1] (assume 0-based 
// indexing). Because all files must have unique names, 
// files created later with the same name as a file 
// created earlier should have an additional (k) suffix 
// in their names, where k is the smallest positive 
// integer (starting from 1) that does not appear in 
// previous file names.
// Your task is to iterate through all elements of names 
// (from left to right) and update all filenames based on the 
// above. Return an array of proper filenames.
// Example
// For names = ["doc", "doc", "image", "doc(1)", "doc"], the 
// output should be solution(names) = ["doc", "doc(1)", "image", 
// "doc(1)(1)", "doc(2)"].
// Since names[0] = "doc" and names[1] = "doc", update 
// names[1] = "doc(1)"
// Since names[1] = "doc(1)" and names[3] = "doc(1)", update 
// names[3] = "doc(1)(1)"
// Since names[0] = "doc", names[1] = "doc(1)", and 
// names[4] = "doc", update names[4] = "doc(2)"

// Parameters
const param = ["doc", "doc", "image", "doc(1)", "doc"]

// My Solution
function solution(names) {
    let aRes = [];
    names.forEach(e => {
        if (aRes.filter(a => a == e).length > 0) {
            let i = 1;
            while (aRes.filter(a => a == `${e}(${i})`).length > 0) {
                i++
            }
            aRes.push(`${e}(${i})`)
        }
        else {
            aRes.push(e)
        }
    })
    return aRes;
}

// Best solution:
function bestSolution(names) {
    const used = {};
    return names.map(name => {
        let newName = name;
        while (used[newName]) {
            newName = `${name}(${used[name]++})`;
        }
        used[newName] = 1;
        return newName;
    });
}

// console log
console.log("My Solution: ", solution(param))
console.log("Best Solution: ", bestSolution(param))