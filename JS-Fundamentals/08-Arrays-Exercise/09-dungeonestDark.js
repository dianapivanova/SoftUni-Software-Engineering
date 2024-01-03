function dungeonestDark(arr) {

    let health = 100
    let coins = 0
    let levels = arr[0].split('|')
    let rooms = 0

    for (let level of levels) {
        rooms++
        let tokens = level.split(' ')

        if (tokens[0] == 'potion') {
            let addedHealth = Number(tokens[1])
            if (health + addedHealth <= 100) {
                health += addedHealth
            } else {
                addedHealth = 100 - health
                health = 100
            }
            console.log(`You healed for ${addedHealth} hp.`)
            console.log(`Current health: ${health} hp.`)
        } else if (tokens[0] == 'chest') {
            let gold = Number(tokens[1])
            coins += gold
            console.log(`You found ${gold} coins.`)
        } else {
            let monster = tokens[0]
            let attack = Number(tokens[1])

            if (health > attack) {
                health -= attack
                console.log(`You slayed ${monster}.`)
            } else {
                health -= attack
                console.log(`You died! Killed by ${monster}.`)
                console.log(`Best room: ${rooms}`)
                break;
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