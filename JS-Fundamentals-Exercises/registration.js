function registration(array) {
    let username = array.shift()

    let command = array.shift()

    while (command !== 'Registration') {
        let tokens = command.split(' ')
        let action = tokens[0]

        if (action == 'Letters') {
            if (tokens[1] == 'Upper') {
                username = username.toUpperCase()
            } else {
                username = username.toLowerCase()
            }
            console.log(username)
        } else if (action == 'Reverse') {
            let startIdx = Number(tokens[1])
            let endIdx = Number(tokens[2])

            if (startIdx >= 0 && startIdx < username.length && endIdx >= 0 && endIdx < username.length) {
                let reversed = username.substr(startIdx, endIdx - startIdx + 1)
                reversed = reversed.split('').reverse().join('')
                console.log(reversed)
            }

        } else if (action == 'Substring') {
            let substr = tokens[1]

            if (username.includes(substr)) {
                username = username.replace(substr, '')
                console.log(username)
            } else {
                console.log(`The username ${username} doesn't contain ${substr}.`)
            }
        } else if (action == 'Replace') {
            let char = tokens[1]
            username = username.split(char).join('-')
            console.log(username)
        } else if (action == 'IsValid') {
            let char = tokens[1]
            if (username.includes(char)) {
                console.log('Valid username.')
            } else {
                console.log(`${char} must be contained in your username.`)
            }
        }

        command = array.shift()
    }

}
registration(["ThisIsSoftUni",
    "Reverse 1 3",
    "Replace S",
    "Substring hi",
    "Registration"])

