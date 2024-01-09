function warriorsQuest(array) {

    let str = array.shift()

    let command = array.shift()

    while (command !== 'For Azeroth') {

        let tokens = command.split(' ')
        let action = tokens[0]

        if (action == 'GladiatorStance') {
            str = str.toUpperCase()
            console.log(str)
        } else if (action == 'DefensiveStance') {
            str = str.toLowerCase()
            console.log(str)
        } else if (action == 'Dispel') {
            let idx = Number(tokens[1])
            let letter = tokens[2]

            if (idx >= 0 && idx < str.length) {
                let firstPart = str.slice(0, idx)
                let secondPart = str.slice(idx + 1)
                str = firstPart + letter + secondPart
                console.log('Success!')
            } else {
                console.log('Dispel too weak.')
            }
        } else if (action == 'Target') {

            if (tokens[1] == 'Change') {
                let firstSubstr = tokens[2]
                let secondSubstr = tokens[3]

                if (str.includes(firstSubstr)) {
                    str = str.split(firstSubstr).join(secondSubstr)
                }

                console.log(str)
            } else if (tokens[1] == 'Remove') {
                let substr = tokens[2]
                if (str.includes(substr)) {
                    str = str.replace(substr, '')
                    console.log(str)
                }
            } else {
                console.log('Command doesn\'t exist!')
            }

        } else {
            console.log('Command doesn\'t exist!')
        }
        command = array.shift()
    }

}
warriorsQuest(["fr1c710n",
    "GladiatorStance",
    "Dispel 2 I",
    "Dispel 4 T",
    "Target Change RICTION riction",
    "For Azeroth"])