function janSNotation(array) {
    let nums = []
    const arithmeticOperations = {
        '+': (arr) => arr[0] + arr[1],
        '-': (arr) => arr[0] - arr[1],
        '*': (arr) => arr[0] * arr[1],
        '/': (arr) => arr[0] / arr[1],
    };


    while (array.length > 0) {
        command = array.shift()

        if (typeof (command) === 'string') {

            if (nums.length < 2) {
                console.log('Error: not enough operands!'); break;
            } else if (nums.length > 2 && !array.includes(NaN)) {
                console.log('Error: too many operands!')
            }

            let newNum = arithmeticOperations[command](nums.slice(nums.length - 2))
            nums.splice(nums.length - 2, 2, newNum)
        } else {
            nums.push(command)
        }

    }

    console.log(nums[0])

}
janSNotation([3,
    4,
    '+'])
