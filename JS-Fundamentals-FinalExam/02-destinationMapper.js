function destinationMapper(str) {
    let pattern = /(=|\/)(?<destination>[A-Z][A-Za-z]{2,})\1/gm
    let totalPoints = 0
    let destinations = []

    let matches = str.matchAll(pattern)


    for (let match of matches) {
        let obj = {}
        let { destination } = match.groups
        let travelPoints = destination.length
        totalPoints += travelPoints

        obj[destination] = travelPoints
        destinations.push(destination)

    }

    console.log(`Destinations: ${destinations.join(', ')}`)
    console.log(`Travel Points: ${totalPoints}`)
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")