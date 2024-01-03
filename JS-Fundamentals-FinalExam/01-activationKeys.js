function activationKeys(array) {
    let key = array.shift()

    let command = array.shift()

    while (command !== 'Generate') {
        let tokens = command.split('>>>')
        let action = tokens[0]

        if (action == 'Slice') {
            let startIdx = Number(tokens[1])
            let endidx = Number(tokens[2])
            let firstPart = key.slice(0, startIdx)
            let secondPart = key.slice(endidx, key.length)
            key = firstPart + secondPart
            console.log(key)
        } else if (action == 'Flip') {
            let startIdx = Number(tokens[2])
            let endidx = Number(tokens[3])

            if (tokens[1] == "Upper") {
                let substr = key.slice(startIdx, endidx)
                key = key.replace(substr, substr.toUpperCase())
            } else {
                let substr = key.slice(startIdx, endidx)
                key = key.replace(substr, substr.toLowerCase())
            }
            console.log(key)

        } else if (action == 'Contains') {
            let substr = tokens[1]
            if (key.includes(substr)) {
                console.log(`${key} contains ${substr}`)
            } else {
                console.log('Substring not found!')
            }
        }

        command = array.shift()
    }


    console.log(`Your activation key is: ${key}`)
}
activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])


// activationKeys(["134softsf5ftuni2020rockz42",
//     "Slice>>>3>>>7",
//     "Contains>>>-rock",
//     "Contains>>>-uni-",
//     "Contains>>>-rocks",
//     "Flip>>>Upper>>>2>>>8",
//     "Flip>>>Lower>>>5>>>11",
//     "Generate"])
