function shopping(arr) {
    let shoppingList = arr.shift().split("!")

    let index = 0
    let currentRow = arr[index]

    while (currentRow !== "Go Shopping!") {
        let tokens = currentRow.split(" ")
        let command = tokens[0]
        let item = tokens[1]
        let newItem = tokens[2]

        switch (command) {
            case "Urgent": urgent(item); break;
            case "Unnecessary": unnecessary(item); break;
            case "Correct": correct(item, newItem); break;
            case "Rearrange": rearrange(item); break;
        }

        index++
        currentRow = arr[index]

    }

    console.log(shoppingList.join(', '))

    function urgent(item) {
        if (!shoppingList.includes(item)) {
            shoppingList.unshift(item)
        }

    }
    function unnecessary(item) {
        if (shoppingList.includes(item)) {
            let currentIdx = shoppingList.indexOf(item)
            shoppingList.splice(currentIdx, 1)
        }

    }
    function correct(item, newItem) {
        if (shoppingList.includes(item)) {
            let currentIdx = shoppingList.indexOf(item)
            shoppingList.splice(currentIdx, 1, newItem)
        }

    }
    function rearrange(item) {
        if (shoppingList.includes(item)) {
            let currentIdx = shoppingList.indexOf(item)
            shoppingList.splice(currentIdx, 1)
            shoppingList.push(item)
        }

    }

}
shopping(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])

