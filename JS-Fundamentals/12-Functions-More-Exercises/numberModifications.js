function numberModification(num) {

    let totalSum = 0
    let numAsString = num.toString()
    let result = numAsString

    for (let i = 0; i < numAsString.length; i++) {
        totalSum += Number(numAsString[i])
    }

    if ((totalSum / numAsString.length) <= 5) {
        while (totalSum / result.length <= 5) {
            totalSum += 9
            result += 9

            if (totalSum / result.length > 5) {
                break;
            }
        }
    }

    console.log(result)

}
numberModification(5835)