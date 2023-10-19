function heartDelivery(input) {
    let houses = input.shift().split('@').map(Number);
    let command = input.shift()
    let index = 0

    while (command !== "Love!") {
        let tokens = command.split(' ')
        let jumpLength = Number(tokens[1])
        index += jumpLength

        if (index >= houses.length) {
            index = 0;
        }

        if (houses[index] == 0) {
            console.log(`Place ${index} already had Valentine\'s day.`);
            command = input.shift()
            continue;
        } else {
            houses[index] -= 2
            if (houses[index] == 0) {
                console.log(`Place ${index} has Valentine's day.`)
            }
        }

        command = input.shift()

    }

    console.log(`Cupid's last position was ${index}.`)

    let failedHouses = 0

    for (let house of houses) {
        if (house !== 0) {
            failedHouses++
        }
    }

    if (failedHouses > 0) {
        console.log(`Cupid has failed ${failedHouses} places.`)
    } else {
        console.log('Mission was successful.')
    }
}
heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])


