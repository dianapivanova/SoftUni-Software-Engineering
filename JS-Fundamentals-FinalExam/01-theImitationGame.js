function imitationGame(array) {
    let message = array.shift()

    let command = array.shift()

    while (command !== 'Decode') {
        let tokens = command.split('|')

        if (tokens[0] == 'ChangeAll') {
            let substr = tokens[1]
            let replacement = tokens[2]

            message = message.split(substr).join(replacement)

        } else if (tokens[0] == 'Insert') {
            let idx = Number(tokens[1])
            let value = tokens[2]

            let firstPart = message.slice(0, idx)
            let secondPart = message.slice(idx)

            message = firstPart + value + secondPart

        } else if (tokens[0] == 'Move') {
            let lettersNum = Number(tokens[1])
            let removedPart = message.slice(0, lettersNum)
            message = message.replace(removedPart, '')
            message = message + removedPart
        }

        command = array.shift()
    }

    console.log(`The decrypted message is: ${message}`)
}
imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',])