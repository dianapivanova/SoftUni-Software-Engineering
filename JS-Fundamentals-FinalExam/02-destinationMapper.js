function destinationMapper(str) {
    let travelPoints = 0
    let destinations = []
    let pattern = /([=\/])(?<city>[A-Z][A-Za-z]{2,})\1/g

    let matches = str.matchAll(pattern)

    for (let match of matches) {
        if (match.groups && match.groups.city) {
            let { city } = match.groups
            destinations.push(city)
            travelPoints += city.length
        }
    }

    console.log(`Destinations: ` + destinations.join(', '))
    console.log(`Travel Points: ${travelPoints}`)

}
destinationMapper("=HAadddddd=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")