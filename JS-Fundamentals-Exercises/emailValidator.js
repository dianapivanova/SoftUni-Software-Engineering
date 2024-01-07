function emailValidator(array) {
    let emailAddress = array.shift()

    let command = array.shift()

    while (command !== 'Complete') {

        let tokens = command.split(' ')
        let action = tokens[0]

        if (action == 'Make') {
            let secondAction = tokens[1]

            if (secondAction == 'Upper') {
                emailAddress = emailAddress.toUpperCase()
                console.log(emailAddress)
            } else {
                emailAddress = emailAddress.toLowerCase()
                console.log(emailAddress)
            }
        } else if (action == 'GetDomain') {
            let count = Number(tokens[1])
            let domain = emailAddress.substring(emailAddress.length - count)
            console.log(domain)
        } else if (action == 'GetUsername') {

            if (emailAddress.includes('@')) {
                let idx = emailAddress.lastIndexOf('@')
                let username = emailAddress.substring(0, idx)
                console.log(username)
            } else {
                console.log(`The email ${emailAddress} doesn't contain the @ symbol.`)
            }
        } else if (action == 'Replace') {
            let char = tokens[1]
            emailAddress = emailAddress.split(char).join('-')
            console.log(emailAddress)
        } else if (action == 'Encrypt') {
            let encryptedMessage = ''

            for (let symbol of emailAddress.split('')) {
                let encrypt = symbol.charCodeAt()
                encryptedMessage += encrypt + ' '
            }
            console.log(encryptedMessage)
        }

        command = array.shift()
    }

}
emailValidator((["Another@Mail.com",
    "Make Lower",
    "GetUsername",
    "GetDomain 3",
    "Encrypt",
    "Complete"])
)