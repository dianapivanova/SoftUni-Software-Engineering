function processOddPositions(arr) {
    let res = []
    for (let i = 1; i < arr.length; i += 2) {
        res.push(arr[i] * 2)
    }
    res = res.reverse()
    console.log(res.join(' '))
}
processOddPositions([10, 15, 20, 25])