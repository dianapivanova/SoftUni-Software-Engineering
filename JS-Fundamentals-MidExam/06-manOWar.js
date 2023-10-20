function manOWar(array) {
    let pirateShip = array.shift().split(">").map(Number)
    let warShip = array.shift().split(">").map(Number)
    let maxCapacity = Number(array.shift())

    let currentRow = array.shift()
    isStalemate = true

    while (currentRow !== "Retire") {
        let tokens = currentRow.split(" ")
        let command = tokens[0]

        if (command == "Fire") {
            let idx = Number(tokens[1])
            let damage = Number(tokens[2])

            if (idx < 0 || idx >= warShip.length) {
                currentRow = array.shift()
                continue;
            } else {
                warShip[idx] -= damage
                if (warShip[idx] <= 0) {
                    console.log('You won! The enemy ship has sunken.'); isStalemate = false; break;
                }
            }

        } else if (command == "Defend") {
            let startIdx = Number(tokens[1])
            let endIdx = Number(tokens[2])
            let damage = Number(tokens[3])

            if (startIdx < 0 || startIdx >= pirateShip.length
                || endIdx < 0 || endIdx >= pirateShip.length) {
                currentRow = array.shift(); continue;
            } else {
                for (let i = startIdx; i <= endIdx; i++) {
                    pirateShip[i] -= damage
                    if (pirateShip[i] <= 0) {
                        console.log('You lost! The pirate ship has sunken.'); isStalemate = false; break;
                    }
                }
            }

        } else if (command == "Repair") {
            let idx = Number(tokens[1])
            let health = Number(tokens[2])

            if (idx < 0 || idx >= pirateShip.length) {
                currentRow = array.shift();
                continue;
            } else {
                if (health + pirateShip[idx] > maxCapacity) {
                    pirateShip[idx] = maxCapacity
                } else {
                    pirateShip[idx] += health
                }
            }
        } else if (command == "Status") {
            let count = 0
            for (let j = 0; j < pirateShip.length; j++) {
                if (pirateShip[j] < maxCapacity * 0.2) {
                    count++
                }
            }

            console.log(`${count} sections need repair.`)

        }

        currentRow = array.shift()
    }

    if (isStalemate) {
        let sumPirateShip = 0
        let sumWarShip = 0
        for (let k = 0; k < pirateShip.length; k++) {
            sumPirateShip += pirateShip[k]
        }
        for (let l = 0; l < warShip.length; l++) {
            sumWarShip += warShip[l]
        }

        console.log(`Pirate ship status: ${sumPirateShip}`)
        console.log(`Warship status: ${sumWarShip}`)
    }
}

manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])



