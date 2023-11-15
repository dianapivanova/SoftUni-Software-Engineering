function secretChat(array) {
    let concealedMessage = array.shift()
    let command = array.shift()

    while (command !== 'Reveal') {
        let tokens = command.split(':|:')
        if (command.includes('InsertSpace')) {
            let idx = Number(tokens[1])
            let messageArr = concealedMessage.split('')
            messageArr.splice(idx, 0, " ")
            concealedMessage = messageArr.join('')
            console.log(concealedMessage)

        } else if (command.includes('Reverse')) {
            let substring = tokens[1]
            if (concealedMessage.includes(substring)) {
                let reversedStr = substring.split('').reverse().join('')
                concealedMessage = concealedMessage.replace(substring, "")
                concealedMessage = concealedMessage.concat(reversedStr)
                console.log(concealedMessage)
            } else {
                console.log('error')
            }

        } else if (command.includes('ChangeAll')) {
            let substring = tokens[1]
            let replacement = tokens[2]
            concealedMessage = concealedMessage.split(substring).join(replacement)
            console.log(concealedMessage)
        }

        command = array.shift()
    }

    console.log(`You have a new text message: ${concealedMessage}`)
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])