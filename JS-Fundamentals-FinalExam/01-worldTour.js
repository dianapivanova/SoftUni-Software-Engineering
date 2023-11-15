function worldTour(array) {
    let stops = array.shift()
    let command = array.shift()

    while (command !== 'Travel') {
        let tokens = command.split(':')

        if (command.includes('Add Stop')) {
            let idx = Number(tokens[1])
            let str = tokens[2]

            if (idx >= 0 && idx < stops.length) {
                stopsArr = stops.split('')
                stopsArr.splice(idx, 0, str)
                stops = stopsArr.join('')
            }
            console.log(stops)
        } else if (command.includes('Remove Stop')) {
            let startIdx = Number(tokens[1])
            let endIdx = Number(tokens[2])

            if (startIdx >= 0 && startIdx < stops.length && endIdx >= 0 && endIdx < stops.length) {
                let substr = stops.substring(startIdx, endIdx + 1)
                stops = stops.replace(substr, "")
            }
            console.log(stops)
        } else if (command.includes('Switch')) {
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
worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])
