function numbers(input) {
    let nums = input.split(" ").map(Number).sort((a, b) => (b - a))

    let averageSum = nums.reduce((acc, val) => acc + val) / nums.length

    let resultArray = []
    let count = 0
    for (let num of nums) {
        if (count == 5) {
            break;
        }
        if (num > averageSum) {
            resultArray.push(num)
            count++
        }
    }

    if (resultArray.length > 0) {
        console.log(resultArray.join(' '))
    } else {
        console.log('No')
    }

}
numbers('0')