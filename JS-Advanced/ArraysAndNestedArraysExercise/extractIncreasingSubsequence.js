function extractFromArray(array) {
    let biggestNum = array.shift()
    let result = [biggestNum]

    for (let el of array) {
        if (el >= biggestNum) {
            biggestNum = el
            result.push(biggestNum)
        }
    }

    return result;
}
extractFromArray([20,
    3,
    2,
    15,
    6,
    1]
)