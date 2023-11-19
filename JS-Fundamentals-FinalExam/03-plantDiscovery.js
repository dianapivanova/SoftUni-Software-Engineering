function plantDiscovery(array) {
    let plantNum = Number(array.shift())
    let plantArr = []

    for (let i = 0; i < plantNum; i++) {
        let [plantName, rarity] = array.shift().split('<->')
        let plantObj = { name: plantName, rarity: rarity }
        plantArr.push(plantObj)
    }

    let command = array.shift()

    while (command !== 'Exhibition') {

        let [task, rest] = command.split(': ')

        if (task == 'Rate') {
            let [name, rating] = rest.split(' - ');

            let findName = plantArr.find(x => x.name == name)

            if (findName) {
                if (findName.rating) {
                    findName.rating.push(Number(rating))
                } else {
                    findName.rating = [Number(rating)]
                }
            } else {
                console.log('error')
            }
        } else if (task == 'Update') {
            let [name, newRarity] = rest.split(' - ');
            let findName = plantArr.find(x => x.name == name)
            if (findName) {
                findName.rarity = newRarity
            } else {
                console.log('error')
            }

        } else if (task == 'Reset') {
            let name = rest
            let findName = plantArr.find(x => x.name == name)
            if (findName) {
                delete findName.rating
            } else {
                console.log('error')
            }
        }

        command = array.shift()
    }


    console.log('Plants for the exhibition:')
    for (let object of plantArr) {
        let avgRating = 0

        if (object.rating) {
            avgRating = (object.rating.reduce((acc, value) => (acc + value), 0)) / object.rating.length
        }
        console.log(`- ${object.name}; Rarity: ${object.rarity}; Rating: ${(avgRating.toFixed(2))}`)
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