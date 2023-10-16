function gladiatorInventory(array) {
    let equipmentArray = array.shift().split(' ')

    for (let i = 0; i < array.length; i++) {
        let tokens = array[i].split(' ')
        let command = tokens[0]

        if (command === "Buy") {
            let item = tokens[1]
            if (!equipmentArray.includes(item)) {
                equipmentArray.push(item)
            } else {
                continue;
            }
        } else if (command === "Trash") {
            let item = tokens[1]
            if (equipmentArray.includes(item)) {
                let idx = equipmentArray.indexOf(item)
                equipmentArray.splice(idx, 1)
            } else {
                continue;
            }
        } else if (command === "Repair") {
            let item = tokens[1]
            if (equipmentArray.includes(item)) {
                let idx = equipmentArray.indexOf(item)
                let repairedItem = equipmentArray.slice(idx, idx + 1)
                equipmentArray.splice(idx, 1)
                equipmentArray.push(repairedItem)
            } else {
                continue;
            }
        } else {
            let upgratedVersion = tokens[1].split('-')
            let item = upgratedVersion[0]
            let upgrade = upgratedVersion[1]
            let upgratedItem = `${item}:${upgrade}`

            if (equipmentArray.includes(item)) {
                let idx = equipmentArray.indexOf(item)
                equipmentArray.splice(idx + 1, 0, upgratedItem)
            }
        }

    }

    console.log(equipmentArray.join(" "))
}
gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'])