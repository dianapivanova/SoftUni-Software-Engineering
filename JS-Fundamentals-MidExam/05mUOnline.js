function dungeonRooms(string) {
    let array = string.split('|')

    let initialHealth = 100
    let bitcoins = 0
    let rooms = 0

    for (let i = 0; i < array.length; i++) {
        rooms++
        let tokens = array[i].split(' ')
        let command = tokens[0]
        let value = Number(tokens[1])

        if (command == "potion") {
            let newHP = 0
            if (initialHealth + value <= 100) {
                newHP = value
                initialHealth += newHP
            } else {
                newHP = 100 - initialHealth
                initialHealth += newHP
            }
            console.log(`You healed for ${newHP} hp.`)
            console.log(`Current health: ${initialHealth} hp.`)
        } else if (command == "chest") {
            bitcoins += value
            console.log(`You found ${value} bitcoins.`)
        } else {
            initialHealth -= value

            if (initialHealth > 0) {
                console.log(`You slayed ${command}.`)
            } else {
                console.log(`You died! Killed by ${command}.`)
                console.log(`Best room: ${rooms}`); break;
            }

        }
    }

    if (initialHealth > 0) {
        console.log("You've made it!")
        console.log(`Bitcoins: ${bitcoins}`)
        console.log(`Health: ${initialHealth}`)
    }

}
dungeonRooms("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")