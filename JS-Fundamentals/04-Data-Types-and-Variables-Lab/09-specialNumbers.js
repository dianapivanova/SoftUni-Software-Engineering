function specialNumbers(num) {

    for (let i = 1; i <= num; i++) {
        let numAsString = String(i)
        let sum = 0

        for (let y = 0; y < numAsString.length; y++) {
            sum += Number(numAsString[y])
        }

        let isSpecial = false


        if (sum == 5 || sum == 7 || sum == 11) {
            isSpecial = true
        }

        if (isSpecial) {
            console.log(`${i} -> True`)
        } else {
            console.log(`${i} -> False`)
        }
    }
}
specialNumbers()