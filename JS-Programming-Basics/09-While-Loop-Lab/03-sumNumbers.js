function sumNumbers(input) {

    let index = 0
    let findingNumber = Number(input[index])
    index++

    let sum = 0

    while (true) {
        if (sum >= findingNumber) {
            break;
        }
        let currentNumber = Number(input[index])
        index++

        sum += currentNumber
    }

    console.log(sum)
}
sumNumbers()