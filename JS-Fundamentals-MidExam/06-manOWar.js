function manOWar(array) {
    let pirateShipStatus = array.shift().split('>').map(Number)
    let warShipStatus = array.shift().split('>').map(Number)
    let maxCapacity = Number(array.shift())
    let isStaleMate = true

    for (let row = 0; row < array.length - 1; row++) {
        let currentRow = array[row]
        let tokens = currentRow.split(" ")
        let command = tokens[0]

        if (command == "Fire") {
            let index = Number(tokens[1])
            let damage = Number(tokens[2])

            if (index >= 0 && index < warShipStatus.length) {
                warShipStatus[index] -= damage
                if (warShipStatus[index] <= 0) {
                    console.log(`You won! The enemy ship has sunken.`); isStaleMate = false; break;
                }
            } else {
                continue;
            }
        } else if (command == "Defend") {
            let startIndex = Number(tokens[1])
            let endIndex = Number(tokens[2])
            let damage = Number(tokens[3])

            if (startIndex >= 0 && startIndex < pirateShipStatus.length &&
                endIndex >= 0 && endIndex < pirateShipStatus.length) {
                for (let i = startIndex; i <= endIndex; i++) {
                    pirateShipStatus[i] -= damage
                    if (pirateShipStatus[i] <= 0) {
                        console.log(`You lost! The pirate ship has sunken.`); isStaleMate = false; break;
                    }
                }
            } else {
                continue;
            }

        } else if (command == "Repair") {
            let index = Number(tokens[1])
            let health = Number(tokens[2])

            if (index >= 0 && index < pirateShipStatus.length) {
                if (pirateShipStatus[index] + health <= maxCapacity) {
                    pirateShipStatus[index] += health
                } else {
                    pirateShipStatus[index] += maxCapacity - pirateShipStatus[index]
                }
            } else {
                continue;
            }
        } else if (command == "Status") {
            let statusCounter = 0
            for (let i = 0; i < pirateShipStatus.length; i++) {

                if (pirateShipStatus[i] < maxCapacity * 0.2) {
                    statusCounter++
                }
            }
            console.log(`${statusCounter} sections need repair.`)
        }
    }

    if (isStaleMate) {
        let pirateShipSum = 0
        let warShipSum = 0

        for (let j = 0; j < pirateShipStatus.length; j++) {
            pirateShipSum += pirateShipStatus[j]
        }

        for (let k = 0; k < warShipStatus.length; k++) {
            warShipSum += warShipStatus[k]
        }

        console.log(`Pirate ship status: ${pirateShipSum}`)
        console.log(`Warship status: ${warShipSum}`)
    }

}
manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Defend 0 0 11",
    "Retire"])
