function nonDecreasingSubset(arr) {
    let newArr = []
    let biggestNum = Number.MIN_SAFE_INTEGER

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i]

        if (currentNum >= biggestNum) {
            biggestNum = currentNum
            newArr.push(biggestNum)
        }

    }

    console.log(newArr.join(' '))
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])