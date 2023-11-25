function activationKeys(array) {
    let key = array.shift()
    let command = array.shift()

    while (command !== 'Generate') {
        let tokens = command.split('>>>')
        let action = tokens[0]

        if (action == 'Slice') {
            let startIdx = Number(tokens[1])
            let endIdx = Number(tokens[2])

            let substr = key.slice(startIdx, endIdx)
            key = key.replace(substr, '')
            console.log(key)
        } else if (action == 'Flip') {
            let upperOrLower = tokens[1]
            let startIdx = Number(tokens[2])
            let endIdx = Number(tokens[3])
            let substr = key.slice(startIdx, endIdx)
            if (upperOrLower == "Upper") {
                key = key.replace(substr, substr.toUpperCase())
            } else {
                key = key.replace(substr, substr.toLowerCase())
            }
            console.log(key)
        } else if (action == 'Contains') {
            let substr = tokens[1]
            if (key.includes(substr)) {
                console.log(`${key} contains ${substr}`)
            } else {
                console.log(`Substring not found!`)
            }
        }

        command = array.shift()
    }

    console.log(`Your activation key is: ${key}`)
}
activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Contains>>>def",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Generate"])