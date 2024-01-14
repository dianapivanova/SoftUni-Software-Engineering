function processOddPositions(arr) {
    let res = []

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            res.push(arr[i])
        }
    }

    res = res.reverse().map(x => (x = x * 2)).join(' ')

    return res
}
processOddPositions([10, 15, 20, 25])