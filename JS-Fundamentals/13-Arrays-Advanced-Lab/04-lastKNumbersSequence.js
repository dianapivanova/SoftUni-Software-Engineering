function lastKNumbersSequence(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let startNum = Math.max(0, i - k)
        let currentNum = result.slice(startNum, startNum + k).reduce((a, b) => (a + b), 0)
        result.push(currentNum)
    }

    console.log(result.join(' '))
}
lastKNumbersSequence(6, 3)