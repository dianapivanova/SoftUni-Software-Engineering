function equalArrays(arr1, arr2) {
    let areIdentical = true
    let indexCounter = 0
    let sum = 0

    let num1 = 0
    let num2 = 0

    for (let i = 0; i < arr1.length; i++) {
        num1 = Number(arr1[i])
        num2 = Number(arr2[i])
        sum += num1

        if (num1 !== num2) {
            areIdentical = false;
            console.log(`Arrays are not identical. Found difference at ${indexCounter} index`);
            break;
        }

        indexCounter++
    }

    if (areIdentical) {
        console.log(`Arrays are identical. Sum: ${sum}`)
    }

}
equalArrays(['10', '20', '30'], ['10', '20', '30'])