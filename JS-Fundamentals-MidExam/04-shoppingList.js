function shoppingList(arr) {
    let initialList = arr.shift().split('!')

    for (let i = 0; i < arr.length - 1; i++) {
        let currentRow = arr[i]
        let tokens = currentRow.split(' ')
        let command = tokens[0]
        let item = tokens[1]
        let correctItem = tokens[2]

        switch (command) {
            case 'Urgent':
                if (!initialList.includes(item)) {
                    initialList.unshift(item)
                } else {
                    continue;
                } break;
            case 'Unnecessary':
                if (initialList.includes(item)) {
                    initialList = initialList.filter(x => x !== item)
                } else {
                    continue;
                } break;
            case 'Correct':
                if (initialList.includes(item)) {
                    let index = initialList.indexOf(item);
                    initialList[index] = correctItem;
                } else {
                    continue;
                } break;
            case 'Rearrange':
                if (initialList.includes(item)) {
                    initialList.splice(1, 0, "shit")
                } else {
                    continue;
                }
        }

    }
    console.log(initialList.join(', '))

}
shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Onion",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])

