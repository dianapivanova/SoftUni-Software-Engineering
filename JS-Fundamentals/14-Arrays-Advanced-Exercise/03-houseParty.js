function houseParty(array) {
    let guests = []

    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(" ")

        if (command.includes('not')) {
            if (guests.includes(command[0])) {
                let removedNameIdx = array.indexOf(command[0])
                guests.splice(removedNameIdx, 1)
            } else {
                console.log(`${command[0]} is not in the list!`)
                continue;
            }
        } else {
            if (guests.includes(command[0])) {
                console.log(`${command[0]} is already in the list!`)
                continue;
            } else {
                guests.push(command[0])
            }
        }
    }


    console.log(guests.join('\n'))
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
)