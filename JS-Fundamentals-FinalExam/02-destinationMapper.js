function destinationMapper(str) {
    let travelPoints = 0
    let destinations = []
    let pattern = /(=|\/)(?<city>[A-Z][A-Za-z]{2,})\1/g

    let match = pattern.exec(str)

    while (match !== null) {
        if (match.groups && match.groups.city) {
            let { city } = match.groups
            destinations.push(city)
            travelPoints += city.length
        }

        match = pattern.exec(str)
    }

    console.log(`Destinations: ` + destinations.join(', '))
    console.log(`Travel Points: ${travelPoints}`)

}
destinationMapper("=HAadddddd=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")