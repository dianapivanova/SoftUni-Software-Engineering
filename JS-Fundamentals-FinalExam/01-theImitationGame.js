function imitationGame(array) {

    let encryptedMessage = array.shift()
    let command = array.shift()

    while (command !== 'Decode') {
        let tokens = command.split('|')

        if (command.includes('ChangeAll')) {
            let substring = tokens[1]
            let replacement = tokens[2]
            encryptedMessage = encryptedMessage.split(substring).join(replacement)
        } else if (command.includes('Insert')) {
            let idx = Number(tokens[1])
            let value = tokens[2]
            encryptedMessageArr = encryptedMessage.split('')
            encryptedMessageArr.splice(idx, 0, value)
            encryptedMessage = encryptedMessageArr.join('')
        } else if (command.includes('Move')) {
            lettersNum = Number(tokens[1])
            let substr = encryptedMessage.substring(0, lettersNum)
            encryptedMessage = encryptedMessage.replace(substr, "")
            encryptedMessage = encryptedMessage.concat(substr)
        }

        command = array.shift()
    }

    console.log(`The decrypted message is: ${encryptedMessage}`)
}
imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',])