function treasureHunt(array) {
    let lootArray = array.shift().split('|')

    for (let i = 0; i < array.length - 1; i++) {
        let tokens = array[i].split(" ")
        let command = tokens[0]

        switch (command) {
            case "Loot":
                for (let j = 1; j < tokens.length; j++) {
                    if (!lootArray.includes(tokens[j])) {
                        lootArray.unshift(tokens[j])
                    } else {
                        continue;
                    }
                }; break;

            case "Drop":
                let index = Number(tokens[1])
                if (index >= 0 && index < lootArray.length) {
                    let removedItem = lootArray.splice(index, 1)
                    lootArray.push(String(removedItem))
                } else {
                    continue;
                }
                ; break;
            case "Steal":
                let stealedItems = Number(tokens[1])
                let stealedItemsArray = lootArray.slice(-stealedItems)
                lootArray.splice(-stealedItems)

                console.log(stealedItemsArray.join(", "))
                    ; break;
        }
    }

    let total = 0
    for (let k = 0; k < lootArray.length; k++) {
        let el = lootArray[k].length
        total += el
    }

    let averageGain = (total / lootArray.length).toFixed(2)

    if (lootArray.length > 0) {
        console.log(`Average treasure gain: ${averageGain} pirate credits.`)
    } else {
        console.log(`Failed treasure hunt.`)
    }


}
treasureHunt((["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])
)