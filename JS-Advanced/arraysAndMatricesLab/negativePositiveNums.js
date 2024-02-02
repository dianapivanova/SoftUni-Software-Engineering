function negativePositiveNums(arr) {
    let result = []

    for (let el of arr) {
        if (el < 0) {
            result.unshift(el)
        } else {
            result.push(el)
        }
    }

    console.log(result.join('\n'))
}
negativePositiveNums([3, -2, 0, -1])