function worldTour(array) {
    let stops = array.shift()

    let command = array.shift()

    while (command !== 'Travel') {
        let tokens = command.split(':')
        let action = tokens[0]

        if (action == 'Add Stop') {
            let idx = Number(tokens[1])
            let str = tokens[2]

            if (idx >= 0 && idx < stops.length) {
                let firstPart = stops.slice(0, idx)
                let secondPart = stops.slice(idx)
                stops = firstPart + str + secondPart
            }
            console.log(stops)
        } else if (action == 'Remove Stop') {
            let startIdx = Number(tokens[1])
            let endIdx = Number(tokens[2])

            if (startIdx >= 0 && startIdx < stops.length && endIdx >= 0 && endIdx < stops.length) {
                let removedStr = stops.slice(startIdx, endIdx + 1)
                stops = stops.replace(removedStr, '')
            }
            console.log(stops)
        } else if (action == 'Switch') {
            let oldStr = tokens[1]
            let newStr = tokens[2]

            if (stops.includes(oldStr)) {
                stops = stops.split(oldStr).join(newStr)
            }
            console.log(stops)
        }

        command = array.shift()
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`)
}
worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])

