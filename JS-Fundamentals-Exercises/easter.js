function easter(array) {
    let modifiedStr = array.shift()

    let command = array.shift()

    while (command !== 'Easter') {
        let tokens = command.split(' ')
        let action = tokens[0]

        if (action == 'Replace') {
            let currentChar = tokens[1]
            let newChar = tokens[2]

            modifiedStr = modifiedStr.split(currentChar).join(newChar)
            console.log(modifiedStr)

        } else if (action == 'Remove') {
            let substr = tokens[1]
            modifiedStr = modifiedStr.replace(substr, '')
            console.log(modifiedStr)

        } else if (action == 'Includes') {
            let str = tokens[1]

            if (modifiedStr.includes(str)) {
                console.log('True')
            } else {
                console.log('False')
            }
        } else if (action == 'Change') {
            if (tokens[1] == 'Lower') {
                modifiedStr = modifiedStr.toLowerCase()
                console.log(modifiedStr)
            } else {
                modifiedStr = modifiedStr.toUpperCase()
                console.log(modifiedStr)
            }
        } else if (action == 'Reverse') {
            let startIdx = Number(tokens[1])
            let endIdx = Number(tokens[2])

            if (startIdx >= 0 && startIdx < modifiedStr.length && endIdx >= 0 && endIdx < modifiedStr.length) {
                let reversed = modifiedStr.substr(startIdx, endIdx + 1)
                reversed = reversed.split('').reverse().join('')
                console.log(reversed)
            }
        }

        command = array.shift()
    }
}
easter(['Easterbscomming',
    'Replace b I',
    'Remove commIng',
    'Change Upper',
    'Reverse 0 5',
    'Easter'])
