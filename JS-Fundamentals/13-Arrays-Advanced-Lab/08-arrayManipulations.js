function arrayManipulations(array) {
    let newArr = array.shift().split(' ')

    for (let i = 0; i < array.length; i++) {
        let tokens = array[i].split(' ')
        let command = tokens[0]
        let number = tokens[1]
        let index = tokens[2]

        if (command == "Add") {
            newArr.push(number)
        } else if (command == "Remove") {
            newArr.splice(newArr.indexOf(number), 1)
        } else if (command == "RemoveAt") {
            newArr.splice(number, 1)
        } else {
            newArr.splice(index, 0, number)
        }

    }

    console.log(newArr.join(' '))



}
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])