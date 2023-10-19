function treasureHunt(array) {
    let lootArray = array.shift().split('|')

    for (let i = 0; i < array.length - 1; i++) {
        let tokens = array[i].split(" ")
        let command = tokens[0]

        if (command == "Loot") {
            for (let j = 1; j < tokens.length; j++) {
                let item = tokens[j]
                if (!lootArray.includes(item)) {
                    lootArray.unshift(item)
                } else {
                    continue;
                }
            }
        } else if (command == "Drop") {
            let idx = tokens[1]
            if (idx >= 0 && idx < lootArray.length) {
                let currentEl = lootArray[idx]
                lootArray.splice(idx, 1)
                lootArray.push(currentEl)
            } else {
                continue;
            }
        } else if (command == "Steal") {
            let stolenItems = Number(tokens[1])
            stolenArray = lootArray.slice(-stolenItems)
            lootArray.splice(-stolenItems)
            console.log(stolenArray.join(", "))
        }
    }

    let sum = 0
    for (let i = 0; i < lootArray.length; i++) {
        sum += lootArray[i].length
    }

    if (lootArray.length > 0) {
        console.log(`Average treasure gain: ${(sum / lootArray.length).toFixed(2)} pirate credits.`)
    } else {
        console.log("Failed treasure hunt.")
    }

}
treasureHunt((["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])
)