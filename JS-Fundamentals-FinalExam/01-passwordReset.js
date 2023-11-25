function passwordReset(array) {
    let pass = array.shift()
    let command = array.shift()

    while (command !== 'Done') {
        let tokens = command.split(' ')
        let action = tokens[0]

        if (action == 'TakeOdd') {
            let rawPass = ''
            for (let i = 1; i < pass.length; i += 2) {
                rawPass += pass[i]
            }
            pass = rawPass
            console.log(pass)
        } else if (action == 'Cut') {
            let idx = Number(tokens[1])
            let length = Number(tokens[2])
            let removedPart = pass.slice(idx, idx + length)
            pass = pass.replace(removedPart, '')
            console.log(pass)
        } else if (action == 'Substitute') {
            let substr = tokens[1]
            let substitute = tokens[2]

            if (pass.includes(substr)) {
                pass = pass.split(substr).join(substitute)
                console.log(pass)
            } else {
                console.log('Nothing to replace!')
            }
        }

        command = array.shift()
    }
    console.log(`Your password is: ${pass}`)
}
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])
