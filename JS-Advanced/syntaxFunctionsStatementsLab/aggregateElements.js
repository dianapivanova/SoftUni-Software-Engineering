function elements(array) {
    let sum = 0
    let inverseSum = 0
    let concat = ''

    for (let el of array) {
        sum += el
        inverseSum += 1 / el
        concat += el
    }

    console.log(sum)
    console.log(inverseSum)
    console.log(concat)
}
elements([1, 2, 3])