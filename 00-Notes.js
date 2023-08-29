

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// array functions
function fArrOthers() {
    let a = [6, 3, 23, 12, 15, 8, 11, 86, 7]
    let aStr = ["Charlie", "bob", "4z89hi", "Ulrique", "adam", "Yolanda", "dante", "2xy3zac", "Mary", "otavio"]

    console.log("Original array: ", a)

    // SORT INTEGERS
    console.log("".padEnd(30, "="))
    let sorted = a.sort((a, b) => a - b)
    console.log("Sort function with INTEGERS: ", sorted)

    // SORT STRINGS

    // locale sort (normal sort)
    console.log("Sort String LOCALE:", aStr.sort((a, b) => a.localeCompare(b)))

    // sort ASCII (upper case before lower case)
    console.log("Sort String ASCII:", aStr.sort((a, b) => a > b ? 1 : b > a ? -1 : 0))

    // FILTER
    console.log("".padEnd(30, "="))
    let filtered = a.filter((a) => a > 20)
    console.log("Filter function: ", filtered)

    // MAP
    console.log("".padEnd(30, "="))
    let mapped = a.map((a) => a * 2);
    console.log("Map function: ", mapped)

    console.log("".padEnd(30, "="))
    let mapped2 = a.map((a) => {
        return a > 20 ? Math.round(a / 2) : a + 10
    });
    console.log("Map function 2: ", mapped2)

    // REDUCE SIMPLE
    console.log("".padEnd(30, "="))
    let sum = a.reduce((iCnt, e) => iCnt + e);
    console.log("Reduce function to add array: ", sum)

    // REDUCE COMPLEX
    console.log("".padEnd(30, "="))
    const param = [2, 4, 7, 10, 33, 34, 35, 36, 37, 38, 39]
    // the 0 passed as argument in th end of reduce funtion makes reduce
    // start with that value
    // simplified:
    let aRes = param.reduce((acc, cur) => acc + Math.abs(cur - 2), 0);
    console.log("Res COMPLEX reduce 1: ", aRes)
    // explained
    aRes = a.reduce((acc, eRed, i) => {
        console.log(`${i} - ${acc} | ${2} | ${eRed}`)
        return acc + Math.abs(eRed - 2)
    }, 0)
    console.log("Res COMPLEX reduce 2: ", aRes)

    // EVERY
    console.log("".padEnd(30, "="))
    let bHasOnlyEvenNum = a.every((e) => e % 2 == 0)
    console.log("Even function to chek: array has only even numbers: ", bHasOnlyEvenNum)
}

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// recursividade (3 exemplos)
function sum(num) {
    if (num === 0) {
        return 0;
    }
    return num + sum(num - 1)
}
function factorial(number) {
    if (number === 1) {
        return 1;
    }
    return number * factorial(number - 1);
}
function fibonatti(number) {
    function calc(number) {
        if (number <= 1) {
            return number;
        }
        return calc(number - 1) + calc(number - 2);
    }
    let string = '';
    for (let i = 1; i <= number; i++) {
        string += `${calc(i)} `;
    }
    console.log(`- ${number} Fib elements: ${string}`);
}

/////////////////////////////////////////////////
// arranjo + combinação
function fCalcArranjoECombinacao() {
    // arranjo a ordem importa. 
    //      Ex: [1,2,3,4] = [[1,2], [2,1], [2,3], [3,2], ...] (1 e 2 é diferente de 2 e 1)
    //      Formula A(n,p)= (n!)/((n-p)!)
    // combinação a ordem nao importa  
    //      Ex: [1,2,3,4] = [[1,2], [2,3], ...] (1 e 2 é a mesma coisa que 2 e 1)
    //      Formula C(n,p)= (n!)/(P!.(n-p)!)
    function fArranjo(aItems, num) {
        // calculando quantos arranjos possiveis
        const iNum = fatorial(aItems.length) / fatorial((aItems.length - num))
        console.log(`Arranjo: ${aItems.length} items arranjados de ${num} em ${num} tem: '${iNum}' arranjos`)

        // identificando todos os arranjos
        let arranjos = []
        arranjos.push([aItems[0]])
        // find all combinatins possible    
        for (let i = 1; i < aItems.length; i++) {
            aCurr = arranjos.slice()
            arranjos = []
            aCurr.forEach((e) => {
                for (let j = 0; j < e.length + 1; j++) {
                    aTmp = e.slice()
                    aTmp.splice(j, 0, aItems[i])
                    arranjos.push(aTmp)
                }
            })
        }
        return arranjos;
    }
    function fCombinacao(aItems, num) {
        // calculando quantas combinações possiveis
        const iNum = fatorial(aItems.length) / (fatorial(num) * fatorial((aItems.length - num)))
        console.log(`Combinação: ${aItems.length} items combinados de ${num} em ${num} tem: '${iNum}' arranjos`)

        // identificando todas as combinações

        return "------"
    }
    function fatorial(valor) {
        // para valores negativos
        if (valor < 0) {

            return 0;

            // para valor = 0  ou igual a 1
        } else if ((valor == 0) || (valor == 1)) {

            return 1;

        } else {

            var acumula = 1;
            for (x = valor; x > 1; x--) {
                acumula = acumula * x;
            }
            return acumula;
        }

    }
    function fArranjoComRecursividade() {
        function permutator(inputArr) {
            var results = [];

            function permute(arr, memo) {
                var cur, memo = memo || [];

                for (var i = 0; i < arr.length; i++) {
                    cur = arr.splice(i, 1);
                    if (arr.length === 0) {
                        results.push(memo.concat(cur));
                    }
                    permute(arr.slice(), memo.concat(cur));
                    arr.splice(i, 0, cur[0]);
                }

                return results;
            }

            return permute(inputArr);
        }
        console.log("".padEnd(30, "="))
        console.time('t1');
        // const aRes = permutator(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'])
        const aRes = permutator(['a', 'b'])
        console.log("Res n# of elements: ", aRes.length)
        console.log("Elements: ", aRes)
        console.timeEnd('t1');
        console.log("".padEnd(30, "="))
    }
    arr = ['a', 'b', 'c', 'd']
    p = 3
    console.log("".padEnd(30, '=='))
    console.log("Arranjos    : ", fArranjo(arr, p))
    console.log("".padEnd(30, '*'))
    console.log("Combinações : ", fCombinacao(arr, p))
    console.log("".padEnd(30, '=='))
}
