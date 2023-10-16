function invention(array) {
    let itemsArray = array.shift().split(', ')

    for (let i = 0; i < array.length - 1; i++) {
        let tokens = array[i].split(' - ')
        let command = tokens[0]

        if (command == "Collect") {
            let item = tokens[1]

            if (itemsArray.includes(item)) {
                continue;
            } else {
                itemsArray.push(item)
            }

        } else if (command == "Drop") {
            let item = tokens[1]
            if (itemsArray.includes(item)) {
                let itemIndex = itemsArray.indexOf(item)
                itemsArray.splice(itemIndex, 1)
            } else {
                continue;
            }
        } else if (command == "Combine Items") {
            let items = tokens[1].split(":")
            let oldItem = items[0]
            let newItem = items[1]

            if (itemsArray.includes(oldItem)) {
                let index = itemsArray.indexOf(oldItem)
                itemsArray.splice(index + 1, 0, newItem)
            } else {
                continue;
            }

        } else if (command == "Renew") {
            let item = tokens[1]
            if (itemsArray.includes(item)) {
                let itemIndex = itemsArray.indexOf(item)
                let pushedItem = itemsArray.splice(itemIndex, 1)
                itemsArray.push(pushedItem)
            } else {
                continue;
            }
        }


    }
    console.log(itemsArray.join(', '))
}
invention([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
]
)
