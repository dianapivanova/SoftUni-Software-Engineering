function activationKeys(array) {
    let activationKey = array.shift()

    for (let command of array) {
        let tokens = command.split('>>>')

        if (command.includes('Slice')) {
            let startIdx = tokens[1]
            let endIdx = tokens[2]
            let removedPart = activationKey.substring(startIdx, endIdx)
            activationKey = activationKey.replace(removedPart, "")
            console.log(activationKey)
        } else if (command.includes('Contains')) {
            let substr = tokens[1]
            if (activationKey.includes(substr)) {
                console.log(`${activationKey} contains ${substr}`)
            } else {
                console.log(`Substring not found!`)
            }
        } else if (command.includes('Flip')) {
            let upperOrLower = tokens[1]
            let startIdx = tokens[2]
            let endIdx = tokens[3]
            let removedPart = activationKey.substring(startIdx, endIdx)

            if (upperOrLower == 'Upper') {
                activationKey = activationKey.replace(removedPart, removedPart.toUpperCase())
            } else if (upperOrLower == 'Lower') {
                activationKey = activationKey.replace(removedPart, removedPart.toLowerCase())
            }

            console.log(activationKey)
        }
    }

    console.log(`Your activation key is: ${activationKey}`)

}
activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])