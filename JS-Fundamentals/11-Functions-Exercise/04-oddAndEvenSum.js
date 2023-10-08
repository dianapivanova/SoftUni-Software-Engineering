function oddAndEvenSum(num) {
    let oddSum = 0
    let evenSum = 0
    let numAsString = String(num)

    for (let i = 0; i < numAsString.length; i++) {
        let char = Number(numAsString[i])
        if (char % 2 == 0) {
            evenSum += char
        } else {
            oddSum += char
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
oddAndEvenSum(1000435)