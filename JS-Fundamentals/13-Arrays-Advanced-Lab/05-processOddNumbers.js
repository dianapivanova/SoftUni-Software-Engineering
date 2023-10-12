function processOddNumbers(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i]
        if (i % 2 !== 0) {
            result.push(arr[i])
        }
    }

    console.log(result.map(x => x * 2).reverse().join(' '))

}
processOddNumbers([10, 15, 20, 25])