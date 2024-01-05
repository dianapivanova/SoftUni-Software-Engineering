function numbers(array) {
    let numArray = array.shift().split(' ').map(Number)

    let command = array.shift()

    while (command !== 'Finish') {
        let tokens = command.split(' ')
        let action = tokens[0]

        if (action == 'Add') {
            let num = Number(tokens[1])
            numArray.push(num)
        } else if (action == 'Remove') {
            let num = Number(tokens[1])
            if (numArray.includes(num)) {
                let idx = numArray.indexOf(num)
                numArray.splice(idx, 1)
            }
        } else if (action == 'Replace') {
            let value = Number(tokens[1])
            let replacement = Number(tokens[2])

            if (numArray.includes(value)) {
                let idx = numArray.indexOf(value)
                numArray.splice(idx, 1, replacement)
            }
        } else if (action == 'Collapse') {
            let value = Number(tokens[1])
            numArray = numArray.filter(x => x > value)
        }

        command = array.shift()
    }

    console.log(numArray.join(' '))
}
numbers(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"])