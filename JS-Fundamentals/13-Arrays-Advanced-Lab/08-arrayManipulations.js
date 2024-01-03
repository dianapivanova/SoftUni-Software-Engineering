function arrayManipulations(array) {
    let nums = array.shift().split(' ').map(Number)


    for (let command of array) {
        let tokens = command.split(' ')
        let action = tokens[0]

        if (action == 'Add') {
            let num = Number(tokens[1])
            nums.push(num)
        } else if (action == 'Remove') {
            let removedNum = Number(tokens[1])
            for (let num of nums) {
                if (num == removedNum) {
                    let idx = nums.indexOf(num)
                    nums.splice(idx, 1)
                }
            }
        } else if (action == 'Insert') {
            let insertedNum = Number(tokens[1])
            let idx = Number(tokens[2])
            nums.splice(idx, 0, insertedNum)
        } else if (action == 'RemoveAt') {
            let idx = Number(tokens[1])
            nums.splice(idx, 1)
        }
    }
    console.log(nums.join(' '))
}
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])