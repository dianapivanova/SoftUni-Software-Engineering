function passwordReset(array) {
    let password = array.shift()

    let command = array.shift()

    while (command !== 'Done') {
        if (command.includes('TakeOdd')) {
            let newPass = ''
            for (let i = 1; i < password.length; i += 2) {
                newPass += password[i]
            }
            password = newPass
            console.log(password)
        } else if (command.includes('Cut')) {
            let tokens = command.split(' ')
            let idx = Number(tokens[1])
            let endIdx = Number(tokens[2]) + idx
            let removedPart = password.substring(idx, endIdx)
            password = password.replace(removedPart, "")
            console.log(password)
        } else if (command.includes('Substitute')) {
            let tokens = command.split(' ')
            let substring = tokens[1]
            let substitute = tokens[2]

            if (!(password.includes(substring))) {
                console.log('Nothing to replace!')
            } else {
                let strArr = password.split(substring).join(substitute)
                password = strArr
                console.log(password)
            }
        }

        command = array.shift()
    }

    console.log(`Your password is: ${password}`)
}
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])
