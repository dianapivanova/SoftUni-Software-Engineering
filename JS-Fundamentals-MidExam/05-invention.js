function invention(array) {
    let itemsArray = array.shift().split(", ")

    let currentRow = array.shift()

    while (currentRow !== "Craft!") {
        let tokens = currentRow.split(' - ')
        let command = tokens[0]
        let item = tokens[1]

        if (command == "Collect") {
            if (!itemsArray.includes(item)) {
                itemsArray.push(item)
            } else {
                currentRow = array.shift()
                continue;
            }
        } else if (command == "Drop") {
            if (itemsArray.includes(item)) {
                let removedItem = itemsArray.indexOf(item)
                itemsArray.splice(removedItem, 1)
            } else {
                currentRow = array.shift()
                continue;
            }
        } else if (command == "Combine Items") {
            let tokens2 = item.split(":")
            let oldItem = tokens2[0]
            let newItem = tokens2[1]
            if (itemsArray.includes(oldItem)) {
                let idx = itemsArray.indexOf(oldItem)
                itemsArray.splice(idx + 1, 0, newItem)
            } else {
                currentRow = array.shift()
                continue;
            }
        } else if (command == "Renew") {
            if (itemsArray.includes(item)) {
                let removedItem = itemsArray.indexOf(item)
                itemsArray.splice(removedItem, 1)
                itemsArray.push(item)
            } else {
                currentRow = array.shift()
                continue;
            }
        }

        currentRow = array.shift()
    }

    console.log(itemsArray.join(', '))
}
invention([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]
)
