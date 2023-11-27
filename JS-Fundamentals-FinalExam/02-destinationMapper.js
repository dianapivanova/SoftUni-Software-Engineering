function destinationMapper(str) {
    let travelPoints = 0
    let destinations = []
    let pattern = /(=|\/)(?<destination>[A-Z][A-Za-z]{2,})\1/gm

    let matches = str.matchAll(pattern)

    for (let match of matches) {
        let { destination } = match.groups
        travelPoints += destination.length
        destinations.push(destination)
    }

    console.log(`Destinations: ${destinations.join(', ')}`)
    console.log(`Travel Points: ${travelPoints}`)
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")