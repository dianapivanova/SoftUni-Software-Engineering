function dungeonestDark(arr) {
    let roomsInfo = arr[0]
    let rooms = roomsInfo.split('|')
    let health = 100
    let coins = 0
    let roomCounter = 0

    for (let room of rooms) {
        roomCounter++
        let tokens = room.split(' ')

        let command = tokens[0]
        let num = Number(tokens[1])

        if (command == "potion") {
            let newHP = health + num <= 100 ? num : 100 - health
            health += newHP
            console.log(`You healed for ${newHP} hp.`)
            console.log(`Current health: ${health} hp.`)
        } else if (command == "chest") {
            coins += num
            console.log(`You found ${num} coins.`)
        } else {
            health -= num

            if (health > 0) {
                console.log(`You slayed ${command}.`)
            } else {
                console.log(`You died! Killed by ${command}.`)
                console.log(`Best room: ${roomCounter}`); break;
            }

        }

    }

    if (health > 0) {
        console.log(`You've made it!`)
        console.log(`Coins: ${coins}`)
        console.log(`Health: ${health}`)
    }

}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])