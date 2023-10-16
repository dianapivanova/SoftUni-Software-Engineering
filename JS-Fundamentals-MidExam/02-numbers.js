function numbers(input) {
    let nums = input.split(" ").map(Number)

    let total = 0
    for (let i = 0; i < nums.length; i++) {
        total += nums[i]
    }
    averageValue = Number(total / nums.length)

    nums.sort((a, b) => (a - b))
    let resultArray = []

    let index = nums.length - 1
    let currentValue = nums[index]

    while (currentValue > averageValue) {
        if (resultArray.length == 5) {
            break;
        }
        resultArray.push(nums[index])
        index--
        currentValue = nums[index]
    }

    if (resultArray.length == 0) {
        console.log('No')
    } else {
        console.log(resultArray.join(" "))
    }

}
numbers('5 5 5 5 5 5 5 5 5 5 5 5')