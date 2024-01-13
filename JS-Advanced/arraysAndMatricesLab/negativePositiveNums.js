function negativePositiveNums(arr) {
    let result = []

    for (let num of arr) {
        if (num < 0) {
            result.unshift(num)
        } else {
            result.push(num)
        }
    }

    console.log(result.join('\n'))
}
negativePositiveNums([3, -2, 0, -1])