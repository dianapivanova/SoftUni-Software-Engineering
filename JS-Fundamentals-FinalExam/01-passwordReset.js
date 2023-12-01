function passwordReset(array) {
    let pass = array.shift()

    let command = array.shift()

    while (command !== 'Done') {

        if (command.includes('TakeOdd')) {
            let rawPass = ''

            for (let i = 1; i < pass.length; i += 2) {
                rawPass += pass[i]
            }

            pass = rawPass
            console.log(pass)

        } else if (command.includes('Cut')) {
            let tokens = command.split(' ')
            let index = Number(tokens[1])
            let length = Number(tokens[2])

            let firstPart = pass.slice(0, index)
            let secondPart = pass.slice(index + length)

            pass = firstPart + secondPart
            console.log(pass)

        } else if (command.includes('Substitute')) {
            let tokens = command.split(' ')
            let substring = tokens[1]
            let substitute = tokens[2]

            if (pass.includes(substring)) {
                pass = pass.split(substring).join(substitute)
                console.log(pass)
            } else {
                console.log(`Nothing to replace!`)
            }
        }

        command = array.shift()
    }

    console.log(`Your password is: ${pass}`)
}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])

