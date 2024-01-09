function concert(array) {
    let command = array.shift()

    let list = []
    let totalTime = 0

    while (command !== 'Start!') {
        let tokens = command.split('; ')
        let action = tokens.shift()
        let band = tokens.shift()

        if (action == 'Add') {
            let names = tokens[0].split(', ')
            let findBand = list.find(x => x.band == band)

            if (findBand) {
                if (findBand.members) {
                    for (let name of names) {
                        if (!findBand.members.includes(name)) {
                            findBand.members.push(name)
                        }
                    }
                } else {
                    findBand.members = names
                }
            } else {
                let bandObj = { band: band, members: names }
                list.push(bandObj)
            }

        } else if (action == 'Play') {
            let time = Number(tokens)
            let findBand = list.find(x => x.band == band)

            if (findBand) {
                if (findBand.time) {
                    totalTime += time
                    findBand.time += time
                } else {
                    totalTime += time
                    findBand.time = time
                }
            } else {
                let bandObj = { band: band, members: 0, time: time }
                totalTime += time
                list.push(bandObj)
            }
        }
        command = array.shift()
    }

    console.log(`Total time: ${totalTime}`)
    for (let group of list) {
        let [band, members, time] = Object.entries(group)
        console.log(`${band[1]} -> ${time[1]}`)

    }

    let firstGroup = list.shift()

    console.log(firstGroup.band)

    for (let member of firstGroup.members) {
        console.log(`=> ${member}`)
    }
}
concert((["Play; The Beatles; 2584",
    "Add; The Beatles; John Lennon, George Harrison, Ringo Starr",
    "Add; The Beatles; Paul McCartney, George Harrison",
    "Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards",
    "Play; The Rolling Stones; 4239",
    "Start!"]))