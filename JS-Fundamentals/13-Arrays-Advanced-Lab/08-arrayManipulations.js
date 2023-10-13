function arrayManipulations(array) {
    let newArr = array.shift().split(' ').map(Number);

    for (let i = 0; i < array.length; i++) {
        let tokens = array[i].split(' ');
        let command = tokens[0];
        let number = Number(tokens[1]);
        let index = Number(tokens[2]);

        if (command === "Add") {
            newArr.push(number);
        } else if (command === "Remove") {
            newArr = newArr.filter(item => item !== number);
        } else if (command === "RemoveAt") {
            newArr.splice(number, 1,);
        } else {
            newArr.splice(index, 0, number);
        }
    }

    console.log(newArr.join(' '));
}
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])