function friendList(array) {
    let friends = array.shift().split(', ')

    let command = array.shift()
    let blacklistedNames = 0
    let lostNames = 0

    while (command !== 'Report') {
        let tokens = command.split(' ')
        let action = tokens[0]

        if (action == 'Blacklist') {
            let name = tokens[1]
            if (friends.includes(name)) {
                let idx = friends.indexOf(name)
                friends[idx] = 'Blacklisted'
                console.log(`${name} was blacklisted.`)
                blacklistedNames++
            } else {
                console.log(`${name} was not found.`)
            }
        } else if (action == 'Error') {
            let idx = Number(tokens[1])
            let lostName = friends[idx]
            if (idx >= 0 && idx < friends.length && lostName !== 'Lost' && lostName !== 'Blacklisted') {
                friends[idx] = 'Lost'
                console.log(`${lostName} was lost due to an error.`)
                lostNames++
            }
        } else if (action == 'Change') {
            let idx = Number(tokens[1])
            let newName = tokens[2]
            let oldName = friends[idx]

            if (idx >= 0 && idx < friends.length) {
                friends[idx] = newName
                console.log(`${oldName} changed his username to ${newName}.`)
            }
        }

        command = array.shift()
    }

    console.log(`Blacklisted names: ${blacklistedNames}`)
    console.log(`Lost names: ${lostNames}`)
    console.log(friends.join(' '))
}
friendList((["Mike, John, Eddie",

    "Blacklist Mike",

    "Error 0",

    "Report"]))