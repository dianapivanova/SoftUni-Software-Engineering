function secretChat(array) {
    let message = array.shift()
    let command = array.shift()

    while (command !== 'Reveal') {
        let tokens = command.split(':|:')
        let action = tokens[0]

        if (action == 'ChangeAll') {
            let str = tokens[1]
            let replacement = tokens[2]
            message = message.split(str).join(replacement)
            console.log(message)
        } else if (action == 'Reverse') {
            let substr = tokens[1]

            if (message.includes(substr)) {
                message = message.replace(substr, '')
                substr = substr.split('').reverse().join('')
                message = message.concat(substr)
                console.log(message)
            } else {
                console.log('error')
            }

        } else if (action == 'InsertSpace') {
            let idx = Number(tokens[1])

            let firstPart = message.slice(0, idx)
            let secondPart = message.slice(idx)
            message = firstPart + " " + secondPart
            console.log(message)
        }

        command = array.shift()
    }

    console.log(`You have a new text message: ${message}`)
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])