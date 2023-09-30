function amazingNumbers(num) {
    //find sum
    let numAsString = String(num)
    let sum = 0
    let isAmazing = false

    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i])
    }

    //check if number has a 9

    let sumAsString = String(sum)

    for (let i = 0; i < sumAsString.length; i++) {
        if (sumAsString[i] == 9) {
            isAmazing = true
        } else {
            isAmazing = false
        }
    }

    //print the result

    if (isAmazing == true) {
        console.log(`${num} Amazing? True`)
    } else {
        console.log(`${num} Amazing? False`)
    }
}
amazingNumbers()