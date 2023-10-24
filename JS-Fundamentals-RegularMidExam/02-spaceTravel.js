function spaceTravel(array) {

    let route = array.shift().split('||')
    let startingFuel = Number(array.shift())
    let startingAmmo = Number(array.shift())

    let currentEl = route.shift()
    let isFailed = false

    while (currentEl !== "Titan") {
        let tokens = currentEl.split(' ')
        let command = tokens[0]
        let num = Number(tokens[1])

        if (command == "Travel") {
            if (startingFuel >= num) {
                startingFuel -= num
                console.log(`The spaceship travelled ${num} light-years.`)
            } else {
                console.log('Mission failed.'); isFailed = true; break;
            }
        } else if (command == "Enemy") {
            if (startingAmmo >= num) {
                startingAmmo -= num
                console.log(`An enemy with ${num} armour is defeated.`)
            } else {
                if (startingFuel > num * 2) {
                    startingFuel -= num * 2
                    console.log(`An enemy with ${num} armour is outmaneuvered.`)
                } else {
                    console.log('Mission failed.'); isFailed = true; break;
                }
            }
        } else if (command == "Repair") {
            startingFuel += num
            startingAmmo += num * 2

            console.log(`Ammunitions added: ${num * 2}.`)
            console.log(`Fuel added: ${num}.`)
        }

        currentEl = route.shift()
    }

    if (!isFailed) {
        console.log('You have reached Titan, all passengers are safe.')
    }

}
spaceTravel(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan',
    '60',
    '100'])

