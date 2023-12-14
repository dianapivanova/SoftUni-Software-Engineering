function activationKeys(array) {
    let password = array.shift()

    let command = array.shift()

    while (command !== 'Generate') {
        let tokens = command.split('>>>')
        let action = tokens[0]

        if (action == 'Contains') {
            let substring = tokens[1]
            if (password.includes(substring)) {
                console.log(`${password} contains ${substring}`)
            } else {
                console.log('Substring not found!')
            }
        } else if (action == 'Slice') {
            let startIdx = Number(tokens[1])
            let endIdx = Number(tokens[2])

            let firstPart = password.slice(0, startIdx)
            let secondPart = password.slice(endIdx)

            password = firstPart + secondPart
            console.log(password)

        } else if (action == 'Flip') {
            let upperLower = tokens[1]
            let startIdx = Number(tokens[2])
            let endIdx = Number(tokens[3])
            let substr = password.slice(startIdx, endIdx)

            if (upperLower == 'Upper') {
                password = password.replace(substr, substr.toUpperCase())
            } else {
                password = password.replace(substr, substr.toLowerCase())
            }

            console.log(password)
        }

        command = array.shift()
    }

    console.log(`Your activation key is: ${password}`)
}
// activationKeys(["abcdefghijklmnopqrstuvwxyz",
//     "Slice>>>2>>>6",
//     "Flip>>>Upper>>>3>>>14",
//     "Flip>>>Lower>>>5>>>7",
//     "Contains>>>def",
//     "Contains>>>deF",
//     "Generate"])


activationKeys(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"])
