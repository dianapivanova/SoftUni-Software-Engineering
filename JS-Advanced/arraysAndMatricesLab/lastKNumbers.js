function lastKNumbers(n, k) {
    let result = [1]

    for (let i = 1; i < n; i++) {
        let currentNum = 0
        if (i - k <= 0) {
            currentNum = result.reduce((acc, value) => acc + value)
        } else {
            currentNum = result.slice(i - k).reduce((acc, value) => acc + value)
        }

        result.push(currentNum)
    }

    return result
}
lastKNumbers(8, 2)