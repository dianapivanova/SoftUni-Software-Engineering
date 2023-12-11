function nonDecreasingSubset(arr) {
    let resultArr = []
    let num = Number(arr[0])
    resultArr.push(num)

    for (let i = 1; i < arr.length; i++) {
        let nextNum = arr[i]
        resultArr.sort((a, b) => a - b)

        if (resultArr[resultArr.length - 1] <= nextNum) {
            resultArr.push(nextNum)
        }
    }

    console.log(resultArr.join(' '))
}
nonDecreasingSubset([20, 3, 2, 15, 6, 1])