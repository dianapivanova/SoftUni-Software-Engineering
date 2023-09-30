function sumOfNumbers(input) {
    let startInterval = Number(input[0]);
    let endInterval = Number(input[1])
    let magicNumber = Number(input[2])
    let isFound = false
    let counter = 0

    for (let a = startInterval; a <= endInterval; a++) {
        for (let b = startInterval; b <= endInterval; b++) {
            counter++
            if (a + b === magicNumber) {
                console.log(`Combination N:${counter} (${a} + ${b} = ${magicNumber})`)
                isFound = true;
                break;
            }
        } if (isFound === true) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`)
    }
}
sumOfNumbers()