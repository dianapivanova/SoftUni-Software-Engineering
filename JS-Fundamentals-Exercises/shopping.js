function shopping(array) {
    let command = array.shift()

    while (command !== 'Go Shopping') {
        let tokens = command.split('->')
        let action = tokens.shift()
        let store = tokens.shift()

        if (action == 'Add') {

        } else if (action == 'Important') {

        } else if (action == 'Remove') {

        }

        command = array.shift()
    }

}
shopping(["Add->Grocery->Dried-fruit,Nuts,Lemons",
    "Add->Market->Nuts,Juice",
    "Important->Market->Snack",
    "Remove->Market",
    "Go Shopping"])