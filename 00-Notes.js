// Arrays inserting and removing elements
function fArrManip() {
    let a = [3, 6, 8, 11, 15, 23]
    let tmp = '';
    console.log(a)
    // remove from back
    tmp = a.pop()
    console.log('Removing from back: ', tmp)
    console.log(a)
    // add to back
    a.push(28)
    console.log(a)
    // remove from front
    tmp = a.shift()
    console.log('Removing from front: ', tmp)
    console.log(a)
    // add to front
    a.unshift(1)
    console.log(a)
    // splice function
    console.log('Removing least with splice')
    a.splice(-1)
    console.log(a)
    console.log('Removing from middle with splice')
    a.splice(2, 1)
    console.log(a)
};

// arr functions
function fArrOthers() {
    let a = [6, 3, 23, 12, 15, 8, 11, 86, 7]
    let a2 = [6, 24, 12, 8, 18, 86, 2]

    console.log("Original array: ", a)

    console.log("".padEnd(30, "="))
    let sum = a.reduce((iCnt, e) => iCnt + e, 0);
    console.log("Reduce function to add array: ", sum)

    console.log("".padEnd(30, "="))
    let bHasOnlyEvenNum = a.every((e) => e % 2 == 0)
    console.log("Even function to chek: array has only even numbers: ", bHasOnlyEvenNum)

    console.log("".padEnd(30, "="))
    let sorted = a.sort((a, b) => a - b)
    console.log("Sort function: ", sorted)

    console.log("".padEnd(30, "="))
    let filtered = a.filter((a) => a > 20)
    console.log("Filter function: ", filtered)

    console.log("".padEnd(30, "="))
    let mapped = a.map((a) => a * 2);
    console.log("Map function: ", mapped)

    console.log("".padEnd(30, "="))
    let mapped2 = a.map((a) => {
        return a > 20 ? Math.round(a / 2) : a + 10
    });
    console.log("Map function 2: ", mapped2)

}

// string functions
function fStrManip() {
    sText = "The brown fox jumped over the dog."

    // invert string
    const sInv = sText.split('').reverse().join('');
    console.log("Invert string: ", sInv)

    const sRep = sText.replace('fox', 'cat')
    console.log("replace string: ", sRep)

    const sSub = sText.substring(10, 12);
    console.log("get substring: ", sSub)
}

fArrOthers()