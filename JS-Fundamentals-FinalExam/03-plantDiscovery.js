function plantDiscovery(array) {
    let plantNum = Number(array.shift())
    let plants = []

    for (let i = 0; i < plantNum; i++) {
        let [plant, rarity] = array.shift().split('<->')
        let objPlant = { plant, rarity }
        plants.push(objPlant)
    }

    let command = array.shift()

    while (command !== 'Exhibition') {
        let [action, other] = command.split(': ')

        if (action == "Rate") {
            let [name, rating] = other.split(' - ')
            let findName = plants.find(x => x.plant === name)

            if (findName) {
                if (findName.rating) {
                    findName.rating.push(Number(rating))
                } else {
                    findName.rating = [Number(rating)]
                }
            } else {
                console.log(`error`)
            }
        } else if (action == "Update") {
            let [name, updateRarity] = other.split(' - ')
            let findName = plants.find(x => x.plant === name)

            if (findName) {
                findName.rarity = updateRarity
            } else {
                console.log(`error`)
            }

        } else if (action == 'Reset') {
            let name = other
            let findName = plants.find(x => x.plant === name)

            if (findName) {
                delete findName.rating
            } else {
                console.log(`error`)
            }
        }

        command = array.shift()
    }

    console.log(`Plants for the exhibition:`)
    for (let obj of plants) {
        let avgRating = 0
        if (obj.rating) {
            avgRating = (obj.rating.reduce((acc, value) => acc + value)) / obj.rating.length
        }
        console.log(`- ${obj.plant}; Rarity: ${obj.rarity}; Rating: ${avgRating.toFixed(2)}`)
    }
}
plantDiscovery((["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]))